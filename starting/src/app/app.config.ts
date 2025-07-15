import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { provideHttpClient } from '@angular/common/http';
import { getAuth } from 'firebase/auth';







// Initialize Firebase
const firebaseApp = initializeApp(environment.firebaseConfig);
const auth  = getAuth(firebaseApp);
export {firebaseApp, auth}



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  provideHttpClient(),
  ],

};
