import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  @Output() getLoggedIn: EventEmitter<any> = new EventEmitter();
  constructor() { }
  setCredentials(credentials: any) {
    localStorage.setItem('loggedIn', JSON.stringify(true));
    localStorage.setItem('userDetail', JSON.stringify(credentials));
    this.getLoggedIn.emit();
  }
  removeCredentials() {
    localStorage.removeItem('userDetail');
    localStorage.removeItem('loggedIn');
    this.getLoggedIn.emit();
  }
  isLoggedIn(){
    let detail = localStorage.getItem('loggedIn');
    if(detail){
      return true;
    }
    else{
      return false;
    }
  }
}
