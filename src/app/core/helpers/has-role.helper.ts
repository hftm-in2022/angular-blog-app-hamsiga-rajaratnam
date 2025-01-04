import { UserDataResult } from 'angular-auth-oidc-client';

/**
 * Helper function to check if a user has a specific role.
 * @param role - The role to check (e.g., 'user').
 * @param userData - The user data from OIDC (optional).
 * @returns boolean - Whether the user has the specified role.
 */
export function hasRole(role: string, userData?: UserDataResult): boolean {
  if (!userData || !userData.userData) {
    return false;
  }

  // Check in both possible locations
  const directRoles = userData.userData.roles;
  const resourceRoles = userData.userData['resource_access']?.['spa-blog']?.roles;

  const roles = directRoles || resourceRoles || [];
  console.log('Roles Found:', roles);
  return roles.includes(role);
}
