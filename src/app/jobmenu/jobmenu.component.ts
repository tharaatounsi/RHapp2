import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { job } from '../data/job';
import { Applicant } from '../data/Applicant';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobmenu',
  templateUrl: './jobmenu.component.html',
  styleUrls: ['./jobmenu.component.css']
})
export class JobmenuComponent implements OnInit{
  constructor(private http:HttpClient, private auth: AuthServiceService,public router:Router){}
  jobs!:job[]
  ngOnInit(): void {
    this.http.get(`http://localhost:8090/joboffers`, { observe: 'body', responseType: 'json'}).subscribe(
  data => {
    this.jobs = (data as job[])
  },
  error => {

  }
  );
  }

  apply(id:number){
    this.router.navigate(["/apply", id])
  }
}
