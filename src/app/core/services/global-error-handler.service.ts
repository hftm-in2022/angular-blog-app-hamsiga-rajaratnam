import { Injectable, ErrorHandler, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

  handleError(error: any): void {
    const errorMessage =
      error.message || 'An unexpected error occurred. Please try again later.';

    // Ensure the snackbar is displayed within Angular's zone
    this.zone.run(() => {
      const snackBarRef = this.snackBar.open(errorMessage, 'Close', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });

      // Allow the user to manually close the Snackbar
      snackBarRef.onAction().subscribe(() => {
        snackBarRef.dismiss();
      });
    });

    // Log the error (optional)
    console.error('Global Error Handler:', error);
  }
}
