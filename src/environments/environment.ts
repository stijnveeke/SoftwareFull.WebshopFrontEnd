// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import config from 'auth_config.json';

const { domain, clientId, audience, apiUri, errorPath, scope } = config as {
  domain: string;
  clientId: string;
  audience?: string;
  apiUri: string;
  errorPath: string;
  scope: string;
};

// const auth0 = createAuth0Client({
//   domain,
//   client_id: clientId
// });

// export const environment = async () => {
//
//   return createAuth0Client({
//     domain,
//     client_id: clientId
//   }).then(auth0 => {
//     return {
//       production: false,
//       auth0,
//       auth: {
//         domain,
//         clientId,
//         ...(audience && audience !== 'YOUR_API_IDENTIFIER' ? { audience } : null),
//         redirectUri: window.location.origin,
//         errorPath,
//         scope
//       },
//       httpInterceptor: {
//         allowedList: [`${apiUri}/*`],
//       },
//     };
//   });
// };

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    ...(audience && audience !== 'YOUR_API_IDENTIFIER' ? { audience } : null),
    redirectUri: window.location.origin,
    errorPath,
    scope
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
