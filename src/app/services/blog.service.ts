import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {BlogDetailOverView, BlogPagedData} from "../models/blog.model";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogEntries(pageIndex: number = 0, pageSize: number = 10, updatedAfter?: Date, searchString?: string): Observable<BlogPagedData> {
    let params = new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString())

    if (updatedAfter) {
      params = params.set('updatedAfter', updatedAfter.toISOString());
    }

    if (searchString && searchString.trim()) {
      params = params.set('searchString', searchString);
    }

    const url = "/entries";
    // const url = "https://d-cap-blog-backend---v2.whitepond-b96fee4b.westeurope.azurecontainerapps.io/entries";
    return this.http.get<BlogPagedData>(url, {params});
  }

  getBlogById(blogId: string): Observable<BlogDetailOverView> {
    const url = `/entries/${blogId}`;  // Use the proxy URL path
    return this.http.get<BlogDetailOverView>(url);
  }

}
