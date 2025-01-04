import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from '../../ui/blog-card/blog-card.component';
import { BlogService } from '../../../services/blog.service';
import { BlogEntryOverview } from '../../../models/blog.model';

@Component({
  selector: 'app-blog-list-layout',
  standalone: true,
  imports: [
    CommonModule,
    BlogCardComponent // Ensure BlogCardComponent is imported here
  ],
  templateUrl: './blog-list-layout.component.html',
  styleUrls: ['./blog-list-layout.component.scss']
})
export class BlogListLayoutComponent implements OnInit {
  blogEntries: WritableSignal<BlogEntryOverview[]> = signal([]);
  selectedBlogId: WritableSignal<number | null> = signal(null);

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.fetchBlogEntries();
  }

  fetchBlogEntries(): void {
    this.blogService.getBlogEntries().subscribe({
      next: (response) => {
        this.blogEntries.set(response.data); // Update the Signal
      },
      error: (err) => {
        console.error('Error fetching blog entries:', err);
      }
    });
  }

  handleBlogClicked(blogId: number | null): void {
    if (blogId !== null) {
      console.log(`Blog clicked with ID: ${blogId}`);
    }
  }

  protected readonly signal = signal;
}
