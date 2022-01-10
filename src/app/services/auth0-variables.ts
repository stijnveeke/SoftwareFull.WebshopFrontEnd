interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'fLnutGMWpbuREHJ1PXYGBI9O6Z6g9AN9',
  domain: 'softwarefull-testing.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  apiUrl: 'https://softwarefullbackend'
};
