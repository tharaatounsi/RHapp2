import { HttpClient } from '@angular/common/http';
import { conge } from './../../data/conge';
import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-makeconge',
  templateUrl: './makeconge.component.html',
  styleUrls: ['./makeconge.component.css']
})
export class MakecongeComponent {
  c:conge = new conge
  constructor(public http:HttpClient, public auth:AuthServiceService){}

  submitconge(){
    this.c.employeeid = this.auth.user.id
    this.http.post(`http://localhost:8090/makeconge`,this.c).subscribe(
      (response) => {
          console.log("Meeting created successfully", response);
      },
      (error) => {
          console.error("Error creating meeting:", error);
      }
  );
  }
}
