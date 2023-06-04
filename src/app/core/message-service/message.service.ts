import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<any>();

  openSideNav() {
    this.subject.next({open:true});
  }
  closeSideNav() {
    this.subject.next({open:false});
  }

  getFlag(): Observable<any> {
    return this.subject.asObservable();
  }
  constructor() { }
}
