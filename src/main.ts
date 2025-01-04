import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideHttpClient} from "@angular/common/http";
import { provideAuth } from 'angular-auth-oidc-client';
import {authConfig} from "./app/auth/auth.config";

bootstrapApplication(AppComponent, {
  providers: [
    appConfig.providers,
    provideHttpClient(), provideAuth(authConfig)
  ]
}).catch((err) => console.error(err));
