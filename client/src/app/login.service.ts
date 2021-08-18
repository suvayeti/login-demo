import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

public user=new BehaviorSubject("Guest")

setUser(user:string){
  this.user.next(user)
}


  getUser(){
    return this.user
  }
}
