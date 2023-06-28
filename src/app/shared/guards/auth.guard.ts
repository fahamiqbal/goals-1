import { Router } from '@angular/router';
import {ApiService} from "../../core/crm-api/api.service";

export const authGuard:any = async () => {
  let router: Router = new Router();
  let service = new ApiService();
  let user = JSON.parse(localStorage.getItem('user') || '{}');
  if (user.id && await service.CALL({session: user.id}, 'seamless_login') === '1' ? true: false) {
    return true;
  }
  router.navigate(['/auth/login']);
  return false;
};
