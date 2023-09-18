import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isAuth().then((isAuth) => {
    if(isAuth){
      return true;
    }
    else{
      return router.createUrlTree(['/join/login'])
    }
  })
};
