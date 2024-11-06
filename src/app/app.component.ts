import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BlogService} from "./services/blog.service";
import {BlogEntryOverview} from "./models/blog.model";
import {BlogListLayoutComponent} from "./components/layout/blog-list-layout/blog-list-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogListLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'blog-app';
}
