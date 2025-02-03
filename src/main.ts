import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandlerService } from './app/core/services/global-error-handler.service';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { TranslateService } from '@ngx-translate/core';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers, // Includes all the providers from appConfig
    provideAnimations(), // Animations
    MatSnackBarModule, // Added Snackbar
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }, // Global Error Handler
  ],
}).then(appRef => {
  const translate = appRef.injector.get(TranslateService);
  translate.setDefaultLang('en'); // Set default language
  translate.use('en'); // Load the default language
}).catch(console.error);
