import { Injectable, signal, WritableSignal } from '@angular/core';
import { BlogEntryOverview } from '../models/blog.model';
import { BlogService } from '../services/blog.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogState {
  private blogEntriesSubject = new BehaviorSubject<BlogEntryOverview[]>([]);
  blogEntries: WritableSignal<BlogEntryOverview[]> = signal([]);

  selectedBlogId: WritableSignal<number | null> = signal(null);
  isLoading: WritableSignal<boolean> = signal(false);

  constructor(private blogService: BlogService) {}

  fetchBlogEntries(): void {
    this.isLoading.set(true);
    this.blogService.getBlogEntries().subscribe({
      next: (response) => {
        this.blogEntriesSubject.next(response.data); // Redux-like state update
        this.blogEntries.set(response.data); // Reactive signal update
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching blog entries:', err);
        this.isLoading.set(false);
      },
    });
  }

  selectBlog(blogId: number): void {
    this.selectedBlogId.set(blogId);
  }
}
