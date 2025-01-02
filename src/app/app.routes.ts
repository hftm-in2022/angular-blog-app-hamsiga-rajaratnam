import { Routes } from '@angular/router';
import {BlogListLayoutComponent} from "./components/layout/blog-list-layout/blog-list-layout.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/blogs',
    pathMatch: 'full',
  },
  {
    path: 'blogs',
    loadComponent: () =>
      import('./components/layout/blog-list-layout/blog-list-layout.component').then(
        (c) => c.BlogListLayoutComponent
      ),
  },
  {
    path: 'blogs/:id',
    loadComponent: () =>
      import('./components/layout/blog-detail/blog-detail.component').then(
        (c) => c.BlogDetailComponent
      ),
  },
];
