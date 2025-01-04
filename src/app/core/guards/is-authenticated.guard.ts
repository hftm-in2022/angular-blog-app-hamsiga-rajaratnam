import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { hasRole } from '../helpers/has-role.helper';
import { firstValueFrom } from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = async () => {
  try {
    const oidcService = inject(OidcSecurityService);
    const router = inject(Router);

    console.log('Checking authentication...');

    // Check if user is authenticated
    const authState = await firstValueFrom(oidcService.isAuthenticated$);
    if (!authState.isAuthenticated) {
      console.log('User is not authenticated. Redirecting to login...');
      await router.navigate(['/login']);
      return false;
    }

    // Fetch the access token
    const accessToken = await firstValueFrom(oidcService.getAccessToken());
    if (!accessToken) {
      console.log('Access token is missing.');
      return false;
    }

    // Check for the required role
    const hasRequiredRole = hasRole(accessToken, 'user');
    if (!hasRequiredRole) {
      console.log('User does not have the required role.');
      return false;
    }

    console.log('Guard passed. User can access the route.');
    return true;
  } catch (error) {
    console.error('Error in isAuthenticatedGuard:', error);
    return false;
  }
};
