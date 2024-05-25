import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { meeting } from 'src/app/data/meeting';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-createmeetings',
  templateUrl: './createmeetings.component.html',
  styleUrls: ['./createmeetings.component.css']
})
export class CreatemeetingsComponent {
  meet:meeting = new meeting;

  constructor(private http: HttpClient){}

  createmeeting(){
    this.http.post("http://localhost:8090/createmeeting", this.meet)
    .subscribe(
      (response) => {
          console.log("Meeting created successfully", response);
      },
      (error) => {
          console.error("Error creating meeting:", error);
      }
  );
  }
}
