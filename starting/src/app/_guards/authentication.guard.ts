import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthGmailService } from '../_services/auth-gmail.service';
import { getMultiFactorResolver } from 'firebase/auth';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const isAutheticated = inject(AuthGmailService).isAuthenticated();
  if (!isAutheticated) {
       return false;
  }
  return true;
};
