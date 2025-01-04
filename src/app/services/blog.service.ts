import { inject, Injectable, signal } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject, finalize, Observable, switchMap, tap } from 'rxjs';
import { BlogDetailOverView, BlogPagedData } from '../models/blog.model';
import { OidcSecurityService } from 'angular-auth-oidc-client';

interface BlogPostResponse {
  data: BlogDetailOverView[];
  maxPageSize: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = '/entries'; // Update this URL based on your backend
  private oidcSecurityService = inject(OidcSecurityService);
  blogs$ = new BehaviorSubject<BlogDetailOverView[]>([]);
  loading = signal(false);

  constructor(private http: HttpClient) {}

  // Fetch all blog posts with pagination
  getPosts(): Observable<BlogPostResponse> {
    this.loading.set(true);
    return this.http.get<BlogPostResponse>(this.apiUrl).pipe(
      tap((response) => this.blogs$.next(response.data)),
      finalize(() => this.loading.set(false))
    );
  }

  // Fetch a specific blog post by ID
  getBlogById(id: string): Observable<BlogDetailOverView> {
    return this.http.get<BlogDetailOverView>(`${this.apiUrl}/${id}`);
  }

  // Save a new blog post
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
        return this.http.post<BlogDetailOverView>(this.apiUrl, blog, { headers });
      })
    );
  }

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

    return this.http.get<BlogPagedData>(this.apiUrl, { params });
  }
}
