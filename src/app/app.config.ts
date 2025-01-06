import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAuth } from 'angular-auth-oidc-client';
import { authConfig } from './auth/auth.config';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Routing
    provideHttpClient(), // HTTP Client
    provideAuth(authConfig), // OIDC Client
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }, // Logging Interceptor
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, // Error Interceptor
  ],
};
