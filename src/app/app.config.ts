import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import { provideAuth } from 'angular-auth-oidc-client';
import { authConfig } from './auth/auth.config';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Routing
    provideHttpClient(), // HTTP Client
    provideAuth(authConfig), // OIDC Client
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }, // Logging Interceptor
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, // Error Interceptor
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      })
    ),
  ],
};
