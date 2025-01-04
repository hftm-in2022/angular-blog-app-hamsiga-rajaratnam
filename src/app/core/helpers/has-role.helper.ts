/**
 * Helper function to check if a user has a specific role.
 * @param role - The role to check (e.g., 'user').
 * @param userData - The user data from OIDC (optional).
 * @returns boolean - Whether the user has the specified role.
 */
export function hasRole(accessToken: string, role: string): boolean {
  if (!accessToken) {
    console.error('Access token is missing.');
    return false;
  }

  try {
    // Decode the token's payload
    const decodedToken = JSON.parse(atob(accessToken.split('.')[1]));

    // Extract roles from the token
    const realmRoles: string[] = decodedToken?.realm_access?.roles || [];
    const clientRoles: string[] =
      decodedToken?.resource_access?.['spa-blog']?.roles || [];

    // Combine roles from both realm and client scopes
    const allRoles = [...realmRoles, ...clientRoles];

    console.log('Extracted Roles:', allRoles);
    return allRoles.includes(role);
  } catch (error) {
    console.error('Failed to decode access token:', error);
    return false;
  }
}
