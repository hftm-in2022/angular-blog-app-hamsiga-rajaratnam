import {Component, WritableSignal, signal, ChangeDetectionStrategy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogDetailOverView } from '../../../../models/blog.model';
import {DatePipe, NgIf} from "@angular/common";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  imports: [
    DatePipe,
    NgIf,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatIcon,
    MatCardActions,
    MatButton,
    MatCardTitle,
    TranslatePipe
  ]
})
export class BlogDetailComponent {
  blog: WritableSignal<BlogDetailOverView | null> = signal(null);
  loading = true;
  error: WritableSignal<string | null> = signal(null);

  constructor(private route: ActivatedRoute, private router: Router) {
    this.loadBlogDetails();
  }

  loadBlogDetails(): void {
    const resolvedData = this.route.snapshot.data['blog'];
    if (resolvedData) {
      this.blog.set(resolvedData);
      this.loading = false;
    } else {
      this.error.set('Failed to load blog details.');
      this.loading = false;
    }
  }

  goBack(): void {
    this.router.navigate(['/blogs']);
  }
}
