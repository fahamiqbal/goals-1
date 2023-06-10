import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor() { }

  CALL(params:any,method:any): Promise<any> {
    var config = {
      method: 'get',
      param: params,
      url: '/api?'+'method='+method+'&input_type=JSON&response_type=JSON&rest_data='+ JSON.stringify(params),
    };
    return axios.get<any>(config.url)
      .then((response) => {
        return JSON.stringify(response.data);
      })
      .catch((error) => {
        return error;
      });
  }

  SyncCALL(params:any,method:any): any {
    var config = {
      method: 'get',
      param: params,
      url: '/api?'+'method='+method+'&input_type=JSON&response_type=JSON&rest_data='+ JSON.stringify(params),
    };
    return axios.get<any>(config.url)
      .then((response) => {
        return JSON.stringify(response.data);
      })
      .catch((error) => {
        return error;
      });
  }
}
