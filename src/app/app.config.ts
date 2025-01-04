import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';
import { loggingInterceptor } from './core/interceptors/logging.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useValue: loggingInterceptor,
    //   multi: true
    // },
    provideHttpClient()
  ]
};
