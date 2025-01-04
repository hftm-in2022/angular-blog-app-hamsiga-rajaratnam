import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {
  constructor(private oidcService: OidcSecurityService) {}

  login(): void {
    this.oidcService.authorize();
  }
}
