import { Component, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogDetailOverView } from '../../../models/blog.model';
import {DatePipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  imports: [
    DatePipe,
    NgIf
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
