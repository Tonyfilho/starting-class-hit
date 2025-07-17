import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthGmailService } from '../_services/auth-gmail.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const isAutheticated = inject(AuthGmailService).isAuthenticated();
  if (!isAutheticated) {
       return false;
  }
  return true;
};
