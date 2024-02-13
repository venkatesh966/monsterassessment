import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const publicRoute: CanActivateFn = async (route, state) => {
  const authService: AuthService = inject(AuthService);

  const isAuthenticated = await authService.checkAuthentication();
  if (isAuthenticated) {
      authService.redirectToDashboard();
      return false;
  } else {
    return true; 
  }
};
