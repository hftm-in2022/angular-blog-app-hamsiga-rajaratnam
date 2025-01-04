import { UserDataResult } from 'angular-auth-oidc-client';

/**
 * Helper function to check if a user has a specific role.
 * @param role - The role to check (e.g., 'user').
 * @param userData - The user data from OIDC (optional).
 * @returns boolean - Whether the user has the specified role.
 */
export function hasRole(role: string, userData?: UserDataResult): boolean {
  if (!userData || !userData.userData || !userData.userData.roles) {
    return false;
  }
  return userData.userData.roles.includes(role);
}
