import { conge } from './../data/conge';
import { Component, ViewChild } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Applicant } from '../data/Applicant';
import { UserModule } from '../data/user';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { suggestion } from '../data/suggestion';
import { meeting } from '../data/meeting';
import { announcement } from '../data/annoucement';

@Component({
  selector: 'app-admin-controls',
  templateUrl: './admin-controls.component.html',
  styleUrls: ['./admin-controls.component.css']
})
export class AdminControlsComponent {

sugg:suggestion[] = []
applicants:Applicant[] = []
conges: conge[] = []
users:UserModule[] = []
uu:boolean = true
u:boolean = false
c:boolean = false
a:boolean = false
su:boolean = false
an:boolean = false
m:boolean = false

meet:meeting[] = []
ann:announcement[] = []

s!:string


search(){
  this.applicants = []
      this.conges = []
      this.sugg = []
      this.ann = []
      this.u=true
      this.c = false
      this.a= false
      this.su = false
      this.an = false
      this.m = false
      this.uu = false;
      this.meet = []
  console.log(this.users.filter(x => x.name == this.s)[0])
  var a = this.users.filter(x => x.name == this.s)[0]
  this.users = [];
  this.users.push(a)
}


updateMeeting() {
  this.router.navigate(["/","addmeeting"])
}

deleteMeeting(a:meeting) {
  this.http.post(`http://localhost:8090/deletemeeting`, a).subscribe(
    (response) => {
        console.log("Meeting created successfully", response);
    },
    (error) => {
        console.error("Error creating meeting:", error);
    }
);
}

updateAnnouncemet() {
  this.router.navigate(["/","addannouncement"])
}

fiche(){
 this.router.navigate(["/","fichepaie"])
}



deleteAnnouncemet(a:announcement) {
  this.http.post(`http://localhost:8090/deleteann`, a).subscribe(
    (response) => {
        console.log("Meeting created successfully", response);
    },
    (error) => {
        console.error("Error creating meeting:", error);
    }
);
}


seeannouncements(){
  this.meet = []
  this.applicants = []
  this.users = []
  this.conges = []
  this.u=false;
  this.c = false
      this.a= false
      this.uu = false;
      this.su = false
      this.an = true
      this.m = false
  this.sugg = []
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
  this.applicants = []
  this.users = []
  this.u=false;
  this.c = false
      this.a= false
      this.uu = false;
      this.su = false
      this.an = false
      this.m = true
  this.conges = []
  this.sugg = []
  this.http.get(`http://localhost:8090/meetings`, { observe: 'body', responseType: 'json'}).subscribe(
data => {
  this.meet = (data as meeting[])
},
error => {

}
);
}


seesuggestions() {
  this.http.get(`http://localhost:8090/suggestions`, { observe: 'body', responseType: 'json'}).subscribe(
    data => {
      this.applicants = []
      this.users = []
      this.conges = []
      this.u=false;
      this.c = false
      this.a= false
      this.su = true
      this.uu = false;
      this.an = false
      this.m = false
      this.ann = []
      this.meet = []
      this.sugg = (data as suggestion[])
    },
    error => {

    }
    );
}
acceptapplicant(c:Applicant){
  this.http.post(`http://localhost:8090/acceptappllicant`, c).subscribe(
    (response) => {
        console.log("Meeting created successfully", response);
    },
    (error) => {
        console.error("Error creating meeting:", error);
    }
);
}

rejectapplicant(c:Applicant){
  this.http.post(`http://localhost:8090/refuseappllicant`, c).subscribe(
    (response) => {
        console.log("Meeting created successfully", response);
    },
    (error) => {
        console.error("Error creating meeting:", error);
    }
);
}

acceptconge(c:conge,a:string){
  c.accepted = a
  this.http.post(`http://localhost:8090/makeconge`, c).subscribe(
    (response) => {
        console.log("Meeting created successfully", response);
    },
    (error) => {
        console.error("Error creating meeting:", error);
    }
);
}

createjob(){
  this.router.navigate(["/","createjob"])
}

seeprofile(){
  this.router.navigate(["/","employee"])
}

createuser(){
  this.router.navigate(["/","adduser"])
}

edituser(id:number){
  this.router.navigate(["/edituser", id])
}

deleteuser(user:UserModule){
  this.http.post(`http://localhost:8090/employee/remove/${user.id}`, user).subscribe(
    (response) => {
        console.log("Meeting created successfully", response);
    },
    (error) => {
        console.error("Error creating meeting:", error);
    }
);
}

createMeeting() {
  this.router.navigate(["/","addmeeting"])
}

createAnnouncement() {
  this.router.navigate(["/","addannouncement"])
}
showConge() {
  this.http.get(`http://localhost:8090/conge`, { observe: 'body', responseType: 'json'}).subscribe(
  data => {
    this.applicants = []
    this.users = []
    this.sugg = []
    this.ann = []
    this.uu = false;
      this.meet = []
      this.u=false;
      this.c = true
      this.a= false
      this.su = false
      this.an = false
      this.m = false
    this.conges = (data as conge[])
  },
  error => {

  }
  );
}
showApplicants() {
  this.http.get(`http://localhost:8090/appllicants`, { observe: 'body', responseType: 'json'}).subscribe(
    data => {
      this.conges = []
      this.users = []
      this.sugg = []
      this.ann = []
      this.meet = []
      this.uu = false;
      this.u=false;
      this.c = false
      this.a= true
      this.su = false
      this.an = false
      this.m = false
  
      this.applicants = (data as Applicant[])
    },
    error => {

    }
    );
}
showEmployees() {
  this.http.get(`http://localhost:8090/employees`, { observe: 'body', responseType: 'json'}).subscribe(
    data => {
      this.applicants = []
      this.conges = []
      this.sugg = []
      this.ann = []
      this.meet = []
      this.u=true;
      this.c = false
      this.a= false
      this.su = false
      this.uu = false;
      this.an = false
      this.m = false
      this.users = (data as UserModule[])
    },
    error => {

    }
    );
}
  constructor(public auth:AuthServiceService, public router:Router, public http:HttpClient){}
}
