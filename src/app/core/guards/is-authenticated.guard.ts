import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OidcSecurityService, UserDataResult } from 'angular-auth-oidc-client';
import { hasRole } from '../helpers/has-role.helper';
import { firstValueFrom } from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = async () => {
  try {
    const oidcService = inject(OidcSecurityService);
    const router = inject(Router);

    console.log('Subscribing to isAuthenticated$...');
    const authState = await firstValueFrom(oidcService.isAuthenticated$);
    console.log('Auth State:', authState);

    if (!authState.isAuthenticated) {
      console.log('User is not authenticated. Redirecting to login...');
      await router.navigate(['/login']);
      return false;
    }

    console.log('Fetching user data...');
    const userData: UserDataResult | null = await firstValueFrom(
      oidcService.userData$
    );
    console.log('User Data:', userData);

    if (!userData || !hasRole('user', userData)) {
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
