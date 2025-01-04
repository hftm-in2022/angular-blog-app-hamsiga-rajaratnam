import {Component, OnInit, WritableSignal, signal, computed, ChangeDetectionStrategy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from '../../../shared/components/blog-card/blog-card.component';
import { BlogState } from '../../state/blog.state';
import { BlogEntryOverview } from '../../../../models/blog.model';

@Component({
  selector: 'app-blog-list-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './blog-list-layout.component.html',
  styleUrls: ['./blog-list-layout.component.scss'],
})
export class BlogListLayoutComponent implements OnInit {
  blogSignals = computed(() =>
    this.blogState.blogEntries().map((entry) => signal(entry as BlogEntryOverview | null))
  );

  constructor(public blogState: BlogState) {}

  ngOnInit(): void {
    this.blogState.fetchBlogEntries(); // Fetch entries via BlogState
  }
}
