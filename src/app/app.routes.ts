import { Routes } from '@angular/router';
import {BlogListLayoutComponent} from "./components/layout/blog-list-layout/blog-list-layout.component";
import {BlogDetailComponent} from "./components/layout/blog-detail/blog-detail.component";

export const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  { path: 'blogs', component: BlogListLayoutComponent }, // The page showing the list of blogs
  { path: 'blogs/:id', component: BlogDetailComponent }, // The detail page for a blog post
];
