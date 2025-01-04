import { Routes } from '@angular/router';
import {BlogResolver} from "./features/blog/state/blog.resolver";
import {isAuthenticatedGuard} from "./core/guards/is-authenticated.guard";
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/blogs',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login-page/login-page.component').then(
        (c) => c.LoginPageComponent
      ),
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

  {
    path: 'add-blog',
    loadComponent: () =>
      import('./features/add-blog-page/add-blog-page.component').then(
        (c) => c.AddBlogPageComponent
      ),
    canActivate: [isAuthenticatedGuard]
  },
];
