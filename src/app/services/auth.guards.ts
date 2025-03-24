import { CanMatchFn, Router, RedirectCommand } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanMatchFn = (
  route,
  segments
): boolean | RedirectCommand => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return (
    authService.isLoggedIn() || new RedirectCommand(router.parseUrl('/login'))
  );
};
