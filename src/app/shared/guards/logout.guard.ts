import { Router} from '@angular/router';
import {ApiService} from "../../core/crm-api/api.service";

export const logoutGuard: any = async () => {
  let router: Router = new Router();
  let service = new ApiService();
  let user = JSON.parse(localStorage.getItem('user') || '{}');
  let bool;
  if(user.id)
    bool = await service.CALL({session: user.id}, 'seamless_login') === '1' ? true: false;
  else
    bool = false;

  if (!user.id || bool === false ) {
    return true;
  }
  router.navigate(['/dashboard/Home']);
  return false;
};
