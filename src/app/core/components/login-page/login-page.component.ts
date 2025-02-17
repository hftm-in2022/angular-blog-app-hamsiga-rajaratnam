import {Component, signal} from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatButton,
    MatIconModule,
    NgIf,
    TranslatePipe,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {
  isLoggedIn = signal(false);

  constructor(private oidcService: OidcSecurityService, private router: Router) {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.oidcService.isAuthenticated$.subscribe((authState) => {
      this.isLoggedIn.set(authState.isAuthenticated);
    });
  }

  login(): void {
    this.oidcService.authorize();
  }

  logout(): void {
    this.oidcService.logoff().subscribe(() => {
      this.router.navigate(['/']).then(() => {});
    });
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
