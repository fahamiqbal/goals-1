import { CanActivateFn,Router } from '@angular/router';
import {ApiService} from "../../core/crm-api/api.service";

export const authGuard: CanActivateFn = async (route, state) => {
  let router: Router = new Router();
  let service = new ApiService();
  let user = JSON.parse(localStorage.getItem('user') || '{}');
  if (user.id) {
    var params = {
      session: user.id
    };
    // return await service.CALL(params, 'seamless_login') === 1 ? true: false;
    return true;
  }
  // router.navigate(['auth/register']);
  return true;
};
