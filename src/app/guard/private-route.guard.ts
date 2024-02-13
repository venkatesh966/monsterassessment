import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';


export const privateRoute: CanActivateFn = async (route, state) => {
  const authService: AuthService = inject(AuthService);

  const isAuthenticated = await authService.checkAuthentication();

  if (isAuthenticated) {
    return true;
  } else {
    authService.redirectToLogin();
    return false; 
  }
};
