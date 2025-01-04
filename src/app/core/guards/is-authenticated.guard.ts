import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OidcSecurityService, UserDataResult } from 'angular-auth-oidc-client';
import { hasRole } from '../helpers/has-role.helper';
import { lastValueFrom } from 'rxjs';

export const isAuthenticatedGuard: CanActivateFn = async () => {
  const oidcService = inject(OidcSecurityService);
  const router = inject(Router);

  const isAuthenticated = await lastValueFrom(oidcService.isAuthenticated$);
  if (!isAuthenticated) {
    await router.navigate(['/login']);
    return false;
  }

  const userData: UserDataResult = await lastValueFrom(oidcService.userData$);

  return hasRole('user', userData);
};
