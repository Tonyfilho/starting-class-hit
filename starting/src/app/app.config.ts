import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCVgB-D0ltk6-XqhA84MMd-vPSUQbTiHkI",
  authDomain: "starting-project-hit-tony.firebaseapp.com",
  projectId: "starting-project-hit-tony",
  storageBucket: "starting-project-hit-tony.firebasestorage.app",
  messagingSenderId: "683438427469",
  appId: "1:683438427469:web:6f392e12e0f65368103b04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
