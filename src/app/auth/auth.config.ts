import { PassedInitialConfig } from 'angular-auth-oidc-client';
import {environment} from "../../environments/environment";

export const authConfig: PassedInitialConfig = {
  config: {
    authority: `${environment.authUrl}/realms/blog`,
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: 'spa-blog',
    scope: 'openid profile email offline_access',
    responseType: 'code',
    silentRenew: true,
    silentRenewUrl: window.location.origin + '/silent-renew.html',
    renewTimeBeforeTokenExpiresInSeconds: 60,
  },
};
