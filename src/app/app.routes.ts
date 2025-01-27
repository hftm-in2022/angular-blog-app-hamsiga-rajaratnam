import { Routes } from '@angular/router';
import { BlogResolver } from './features/blog/state/blog.resolver';
import { isAuthenticatedGuard } from './core/guards/is-authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/blog/components/blog-list-layout/blog-list-layout.component').then(
        (c) => c.BlogListLayoutComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/components/login-page/login-page.component').then(
        (c) => c.LoginPageComponent
      ),
  },
  {
    path: 'blogs/:id',
    loadComponent: () =>
      import('./features/blog/components/blog-detail/blog-detail.component').then(
        (c) => c.BlogDetailComponent
      ),
    resolve: { blog: BlogResolver },
  },
  {
    path: 'blogs',
    loadComponent: () =>
      import('./features/blog/components/blog-list-layout/blog-list-layout.component').then(
        (c) => c.BlogListLayoutComponent
      ),
  },
  {
    path: 'add-blog',
    loadComponent: () =>
      import('./features/add-blog-page/add-blog-page.component').then(
        (c) => c.AddBlogPageComponent
      ),
    canActivate: [isAuthenticatedGuard],
  },
  {
    path: '**', // Catch-all route
    loadComponent: () =>
      import('./features/error-page/error-page.component').then(
        (c) => c.ErrorPageComponent
      ),
  },
];
