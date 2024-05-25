import { announcement } from './../../data/annoucement';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-createannouncements',
  templateUrl: './createannouncements.component.html',
  styleUrls: ['./createannouncements.component.css']
})
export class CreateannouncementsComponent {
  constructor(public http:HttpClient){}
  ann:announcement = new announcement
  createannouncement(){
    this.http.post(`http://localhost:8090/announce`, this.ann)
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
