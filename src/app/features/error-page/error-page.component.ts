import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
  ],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {
}
