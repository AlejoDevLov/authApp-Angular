import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authServie = inject( AuthService );
  const router = inject( Router );

  const url = state.url;
  localStorage.setItem('url', url);

  if( authServie.authStatus() === AuthStatus.authenticated ) return true;

  if( authServie.authStatus() === AuthStatus.checking ) return false;

  router.navigateByUrl('login');
  return false;
};
