import { suggestion } from './../../data/suggestion';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-makesuggestion',
  templateUrl: './makesuggestion.component.html',
  styleUrls: ['./makesuggestion.component.css']
})
export class MakesuggestionComponent {
  constructor(public http:HttpClient){}

  s:suggestion = new suggestion

  add(){

    this.http.post(`http://localhost:8090/makesuggestion`,this.s.text).subscribe(
      (response) => {
          console.log("Meeting created successfully", response);
      },
      (error) => {
          console.error("Error creating meeting:", error);
      }
  );
  }
}
