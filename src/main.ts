import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandlerService } from './app/core/services/global-error-handler.service';
import {MatSnackBarModule} from "@angular/material/snack-bar";

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, // Includes all the providers from appConfig
    provideAnimations(), // Animations
    MatSnackBarModule, // Added Snackbar
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }, // Global Error Handler
  ],
}).catch(console.error);
