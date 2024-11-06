import { Routes } from '@angular/router';
import {BlogListLayoutComponent} from "./components/layout/blog-list-layout/blog-list-layout.component";
import {BlogDetailComponent} from "./components/layout/blog-detail/blog-detail.component";

export const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  { path: 'blogs', loadChildren: () => import('./features/blog-overview/blog-overview.module').then(m => m.BlogOverviewModule) }, // Lazy loading the BlogOverviewModule
  { path: 'blogs/:id', loadChildren: () => import('./features/blog-detail/blog-detail.module').then(m => m.BlogDetailModule) }, // Lazy loading the BlogDetailModule
];
