import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { announcement } from '../data/annoucement';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { meeting } from '../data/meeting';
import { UserModule } from '../data/user';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit{
  ann:announcement[] = []
  meet:meeting[] = []
  k:boolean = false
  m:boolean = false
  constructor(public auth:AuthServiceService,public router:Router,public http:HttpClient){}
  ngOnInit(): void {
    this.fetchUser()
    this.http.get(`http://localhost:8090/announcements`, { observe: 'body', responseType: 'json'}).subscribe(
  data => {
    this.ann = (data as announcement[])
  },
  error => {

  }
  );
  }

  fetchUser(){
    this.http.get(`http://localhost:8090/login/${this.auth.user.email}/${this.auth.user.password}`, { observe: 'body', responseType: 'json'}).subscribe(
      data => {
        this.auth.user = (data as UserModule);
      },
      error => {

      }
      );
  }

  seeannouncements(){
    this.meet = []
    this.k = true
    this.m = false
    this.http.get(`http://localhost:8090/announcements`, { observe: 'body', responseType: 'json'}).subscribe(
  data => {
    this.ann = (data as announcement[])
  },
  error => {

  }
  );
  }

  seemeetings(){
    this.ann = []
    this.k = false
    this.m = true
    this.http.get(`http://localhost:8090/meetings`, { observe: 'body', responseType: 'json'}).subscribe(
  data => {
    this.meet = (data as meeting[])
  },
  error => {

  }
  );
  }

  makeconge(){
    this.router.navigate(["/","makeconge"])
  }

  makesuggestion(){
    this.router.navigate(["/","makesuggestion"])
  }
}
