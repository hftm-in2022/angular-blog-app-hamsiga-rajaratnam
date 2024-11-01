import {Component, Input} from '@angular/core';
import {BlogEntryOverview} from "../../../models/blog.model";

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  @Input() blogEntry!: BlogEntryOverview;

  getDefaultImage(): string {
    return 'assets/images/default_header_img.jpg';
  }

  viewMore(id: number) {
    
  }
}
