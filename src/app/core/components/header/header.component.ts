import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButton, MatToolbar],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  userEmail: string | null = null;

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe((authResult) => {
      this.isAuthenticated = authResult.isAuthenticated;
      this.cdr.detectChanges();
    });

    this.oidcSecurityService.userData$.subscribe((userData) => {
      this.userEmail = userData?.userData?.email || null;
      this.cdr.detectChanges();
    });
  }

  login(): void {
    this.oidcSecurityService.authorize();
  }

  logout(): void {
    this.oidcSecurityService.logoff().subscribe(() => {
      this.router.navigate(['/']).then(r => {});
    });
  }
}
