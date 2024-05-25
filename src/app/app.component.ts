import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth:AuthServiceService, public router:Router){}
jobs() {
  this.router.navigate(["/","jobs"])
}
admin() {
  this.router.navigate(["/","admin"])
}
employee() {
  this.router.navigate(["/","employee"])
}
logout() {
  this.auth.user.accType = ""
  this.router.navigate(["/"])
}
home() {
  this.router.navigate(["/"])
}

login() {
  this.router.navigate(["/","login"])
}

  title = 'hr_app';
}
