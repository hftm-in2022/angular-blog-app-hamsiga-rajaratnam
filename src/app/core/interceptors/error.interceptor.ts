import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP Error:', error);

        let errorMessage = 'An error occurred. Please try again.';
        if (error.status === 0) {
          errorMessage = 'Network error. Please check your connection.';
        } else if (error.error?.message) {
          errorMessage = error.error.message; // Use backend error message
        }

        // Optionally show error to the user
        alert(errorMessage);

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
