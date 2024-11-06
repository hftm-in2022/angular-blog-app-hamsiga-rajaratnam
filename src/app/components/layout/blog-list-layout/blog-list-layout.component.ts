import {Component, Input, OnInit} from '@angular/core';
import {BlogCardComponent} from "../../ui/blog-card/blog-card.component";
import {CommonModule} from "@angular/common";
import {BlogEntryOverview} from "../../../models/blog.model";
import {BlogService} from "../../../services/blog.service";

@Component({
  selector: 'app-blog-list-layout',
  standalone: true,
  imports: [
    CommonModule,
    BlogCardComponent
  ],
  templateUrl: './blog-list-layout.component.html',
  styleUrl: './blog-list-layout.component.scss'
})
export class BlogListLayoutComponent implements OnInit{
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
