import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('HTTP Request Started:', req.url);

    return next.handle(req).pipe(
      tap({
        next: (event) => {
          console.log('HTTP Response Received:', event);
        },
        error: (error) => {
          console.error('HTTP Request Error:', error);
        },
      })
    );
  }
}
