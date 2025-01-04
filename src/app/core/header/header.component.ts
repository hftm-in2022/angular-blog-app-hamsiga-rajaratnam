import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {AuthenticatedResult, OidcSecurityService} from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    // Import Angular Material modules
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuthenticated$: Observable<AuthenticatedResult>;
  userData$: Observable<any>;

  constructor(private oidcService: OidcSecurityService) {
    // Observable to check if the user is authenticated
    this.isAuthenticated$ = this.oidcService.isAuthenticated$;

    // Observable to get the user's data
    this.userData$ = this.oidcService.userData$;
  }

  login(): void {
    // Initiate the login process
    this.oidcService.authorize();
  }

  logout(): void {
    // Perform the logout and redirect to the login page
    this.oidcService.logoffAndRevokeTokens().subscribe({
      next: () => {
        console.log('User logged out successfully.');
      },
      error: (error) => {
        console.error('Logout failed:', error);
      },
    });
  }
}
