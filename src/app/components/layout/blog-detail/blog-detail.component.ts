import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlogService} from "../../../services/blog.service";
import {BlogDetailOverView} from "../../../models/blog.model";
import {DatePipe, NgIf} from "@angular/common";

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
export class BlogDetailComponent implements OnInit{
  blog: BlogDetailOverView | undefined;
  loading = true;
  error: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.blogService.getBlogById(blogId).subscribe({
        next: (data) => {
          this.blog = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load blog details.';
          this.loading = false;
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/blogs']);
  }
}
