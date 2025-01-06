import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, provideHttpClient} from "@angular/common/http";
import { provideAuth } from 'angular-auth-oidc-client';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { authConfig } from "./app/auth/auth.config";
import {GlobalErrorHandlerService} from "./app/core/services/global-error-handler.service";
import {ErrorHandler} from "@angular/core";
import {ErrorInterceptor} from "./app/core/interceptors/error.interceptor";

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideHttpClient(),
    provideAuth(authConfig),
    provideAnimations(),
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
}).catch((err) => console.error(err));
