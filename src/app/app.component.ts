import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BlogService} from "./services/blog.service";
import {BlogEntryOverview} from "./models/blog.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'blog-app';
  blogEntries: BlogEntryOverview[] = [];
  totalCount: number = 0;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.fetchBlogEntries();
  }

  fetchBlogEntries(): void {
    const updatedAfter = new Date('2024-10-29T15:25:09');
    const searchString = 'done';

    this.blogService.getBlogEntries().subscribe({
      next: (response) => {
        this.blogEntries = response.data;
        this.totalCount = response.totalCount;
        console.log("****************************************************");
        console.log(this.blogEntries);
        console.log(this.totalCount);
        console.log("****************************************************");
      },
      error: (err) => {
        console.error('Error fetching blog entries:', err);
      }
    });
  }
}
