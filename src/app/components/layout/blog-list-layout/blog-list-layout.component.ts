import {Component, Input} from '@angular/core';
import {BlogCardComponent} from "../../ui/blog-card/blog-card.component";
import {CommonModule} from "@angular/common";
import {BlogEntryOverview} from "../../../models/blog.model";

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
export class BlogListLayoutComponent {
  @Input() blogEntries: BlogEntryOverview[] = [];
}
