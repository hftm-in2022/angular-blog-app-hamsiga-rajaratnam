import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']).then(r => {});
  }
}
