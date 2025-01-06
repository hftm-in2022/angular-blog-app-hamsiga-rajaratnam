import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from "@angular/common/http";
import { provideAuth } from 'angular-auth-oidc-client';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { authConfig } from "./app/auth/auth.config";

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideHttpClient(),
    provideAuth(authConfig),
    provideAnimations() // Add animations provider
  ]
}).catch((err) => console.error(err));
