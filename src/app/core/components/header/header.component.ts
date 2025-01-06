import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    // Material Modules
    MatSidenav,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    // Angular Modules
    RouterLink,
    RouterLinkActive,
    NgIf,
    RouterOutlet,
  ],
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isAuthenticated = false;
  userEmail: string | null = null;
  isMobile = false;

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkScreenSize();

    this.oidcSecurityService.isAuthenticated$.subscribe((authResult) => {
      this.isAuthenticated = authResult.isAuthenticated;
    });

    this.oidcSecurityService.userData$.subscribe((userData) => {
      this.userEmail = userData?.userData?.email || null;
    });
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 900; // Mobile view breakpoint
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
  }

  closeSidenav(): void {
    this.sidenav.close();
  }

  login(): void {
    this.oidcSecurityService.authorize();
  }

  logout(): void {
    this.oidcSecurityService.logoff().subscribe(() => {
      this.router.navigate(['/']).then(() => {});
    });
  }

  onSidenavClosed(): void {
    console.log('Sidenav closed');
  }
}
