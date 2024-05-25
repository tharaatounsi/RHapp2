import { UserModule } from './../data/user';
// Import required modules
import { Component, OnDestroy, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

// Define the module

// Define the component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// Define the component class
export class LoginComponent implements OnInit,OnDestroy{
  email: string = "";
  password: string = "";
  errorMessage: string = "";


  constructor(private http: HttpClient, private router :Router,private auth:AuthServiceService) {}
  ngOnDestroy(): void {
    this.auth.o = ""
  }
  ngOnInit(): void {
    this.auth.o = "o"
  }

  login() {
    console.log(this.email);
    console.log(this.password);
    this.http.get(`http://localhost:8090/login/${this.email}/${this.password}`, { observe: 'body', responseType: 'json'}).subscribe(
  data => {
    console.log(data);
    (data as UserModule).accType === "admin" ? this.router.navigate(["/","admin"]) : this.router.navigate(["/","employee"]);
    this.auth.user = (data as UserModule);
  },
  error => {
    this.errorMessage = "wrong username or password pls try again" + error
  }
  );
  }
}
