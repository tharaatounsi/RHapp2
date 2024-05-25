import { Injectable } from '@angular/core';
import {UserModule} from '../app/data/user'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user:UserModule = new UserModule
  o!:string
  constructor() { }
}
