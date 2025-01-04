import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { hasRole } from '../helpers/has-role.helper';
import { lastValueFrom } from 'rxjs';

/**
 * Guard to check if a user is authenticated and has the required role.
 * @returns boolean | Promise<boolean> - Whether the user can access the route.
 */
export const isAuthenticatedGuard: CanActivateFn = async () => {
  const oidcService = inject(OidcSecurityService);

  // Wait for the authentication state to resolve
  const isAuthenticated = await lastValueFrom(oidcService.isAuthenticated$);

  if (!isAuthenticated) {
    // Redirect to login if the user is not authenticated
    oidcService.authorize();
    return false;
  }

  // Fetch user data
  const userData = await lastValueFrom(oidcService.userData$);

  // Check if the user has the 'user' role
  return hasRole('user', userData);
};
