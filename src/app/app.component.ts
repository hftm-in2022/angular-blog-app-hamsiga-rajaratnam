import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./core/components/header/header.component";
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'blog-app';

  constructor(private oidcService: OidcSecurityService) {}

  ngOnInit(): void {
    this.oidcService.checkAuth().subscribe({
      next: (authResult) => {
        console.log('OIDC Authentication Result:', authResult);
      },
      error: (err) => {
        console.error('OIDC Authentication Error:', err);
      },
    });
  }
}
