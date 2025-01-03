import {Component, Input} from '@angular/core';
import {BlogEntryOverview} from "../../../models/blog.model";
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    NgForOf,
    MatIcon,
    NgOptimizedImage
  ],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  @Input() blogEntry!: BlogEntryOverview;

  constructor(private router: Router) {}

  getDefaultImage(): string {
    return 'assets/images/default_header_img.jpg';
  }

  viewMore(id: number) {
    this.router.navigate(['/blogs', id]);
  }
}
