import { Routes } from '@angular/router';
import {BlogResolver} from "./features/blog/state/blog.resolver";
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/blogs',
    pathMatch: 'full',
  },
  {
    path: 'blogs',
    loadComponent: () =>
      import('./features/blog/components/blog-list-layout/blog-list-layout.component').then(
        (c) => c.BlogListLayoutComponent
      ),
  },
  {
    path: 'blogs/:id',
    loadComponent: () =>
      import('./features/blog/components/blog-detail/blog-detail.component').then(
        (c) => c.BlogDetailComponent
      ),
    resolve: { blog: BlogResolver }
  },
];
