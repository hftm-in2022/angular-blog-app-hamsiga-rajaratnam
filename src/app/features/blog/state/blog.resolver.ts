import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BlogDetailOverView } from '../../../models/blog.model';
import { BlogService } from '../../../services/blog.service';

@Injectable({
  providedIn: 'root'
})
export class BlogResolver implements Resolve<BlogDetailOverView | null> {

  constructor(private blogService: BlogService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogDetailOverView | null> {
    const blogId = route.paramMap.get('id');
    if (blogId) {
      const blogIdNumber = parseInt(blogId, 10); // Convert blogId to a number
      if (isNaN(blogIdNumber)) {
        console.error(`Invalid blog ID: ${blogId}`);
        return of(null);
      }
      return this.blogService.getBlogById(blogIdNumber).pipe(
        catchError((error) => {
          console.error('Error fetching blog details:', error);
          return of(null); // Return null if an error occurs
        })
      );
    }
    return of(null);
  }
}
