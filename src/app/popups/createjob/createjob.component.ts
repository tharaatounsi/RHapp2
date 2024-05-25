import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { job } from 'src/app/data/job';

@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})
export class CreatejobComponent {
  job:job = new job
  constructor(private http: HttpClient){}

  createjob(){
    this.http.post("http://localhost:8090/offerjob", this.job)
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
