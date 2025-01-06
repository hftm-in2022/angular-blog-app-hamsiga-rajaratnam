import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        const errorMessage = error.error?.message || 'An unexpected error occurred';
        const snackBarRef = this.snackBar.open(errorMessage, 'Close', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });

        // Allow the user to manually close the Snackbar
        snackBarRef.onAction().subscribe(() => {
          snackBarRef.dismiss();
        });

        return throwError(() => error);
      })
    );
  }
}
