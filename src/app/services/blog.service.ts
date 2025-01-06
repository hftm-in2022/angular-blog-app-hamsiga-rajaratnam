import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, finalize, switchMap, tap, of } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { BlogEntryOverview, BlogPagedData, BlogDetailOverView, BlogPagedDataSchema, BlogDetailOverViewSchema } from '../models/blog.model';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly apiUrl = environment.apiUrl;
  private oidcSecurityService = inject(OidcSecurityService);
  blogs$ = new BehaviorSubject<BlogEntryOverview[]>([]);
  loading = signal(false);

  constructor(private http: HttpClient) {}

  /**
   * Fetch all blog entries with optional pagination, updatedAfter, and searchString.
   */
  getBlogEntries(
    pageIndex: number = 0,
    pageSize: number = 10,
    updatedAfter?: Date,
    searchString?: string
  ): Observable<BlogPagedData> {
    let params = new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString());

    if (updatedAfter) {
      params = params.set('updatedAfter', updatedAfter.toISOString());
    }
    if (searchString && searchString.trim()) {
      params = params.set('searchString', searchString);
    }

    this.loading.set(true);
    return this.http.get<unknown>(this.apiUrl, { params }).pipe(
      tap(() => this.loading.set(true)),
      switchMap((data) => {
        const parsed = BlogPagedDataSchema.safeParse(data);
        if (parsed.success) {
          this.blogs$.next(parsed.data.data);
          return of(parsed.data);
        } else {
          console.error('Invalid response structure:', parsed.error);
          throw new Error('Validation failed');
        }
      }),
      finalize(() => this.loading.set(false)),
      catchError((err) => {
        console.error('Failed to fetch blog entries:', err);
        throw err;
      })
    );
  }

  /**
   * Fetch blog details by ID.
   */
  getBlogById(id: number): Observable<BlogDetailOverView> {
    return this.http.get<unknown>(`${this.apiUrl}/${id}`).pipe(
      switchMap((data) => {
        const parsed = BlogDetailOverViewSchema.safeParse(data);
        if (parsed.success) {
          return of(parsed.data);
        } else {
          console.error('Invalid response structure:', parsed.error);
          throw new Error('Validation failed');
        }
      }),
      catchError((err) => {
        console.error(`Failed to fetch blog details for ID ${id}:`, err);
        throw err;
      })
    );
  }

  /**
   * Save a new blog post.
   */
  savePost(blog: {
    title: string;
    content: string;
    headerImageUrl?: string;
  }): Observable<BlogDetailOverView> {
    return this.oidcSecurityService.getAccessToken().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        });
        return this.http.post<unknown>(this.apiUrl, blog, { headers }).pipe(
          switchMap((data) => {
            const parsed = BlogDetailOverViewSchema.safeParse(data);
            if (parsed.success) {
              return of(parsed.data);
            } else {
              console.error('Invalid response structure:', parsed.error);
              throw new Error('Validation failed');
            }
          })
        );
      }),
      catchError((err) => {
        console.error('Failed to save blog post:', err);
        throw err;
      })
    );
  }
}
