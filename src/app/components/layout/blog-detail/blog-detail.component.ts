import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogDetailOverView } from '../../../models/blog.model';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    DatePipe,
    NgIf
  ],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent implements OnInit {
  blog: BlogDetailOverView | undefined;
  loading = true;
  error: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const resolvedData = this.route.snapshot.data['blog'];
    if (resolvedData) {
      this.blog = resolvedData;
      this.loading = false;
    } else {
      this.error = 'Failed to load blog details.';
      this.loading = false;
    }
  }

  goBack() {
    this.router.navigate(['/blogs']);
  }
}
