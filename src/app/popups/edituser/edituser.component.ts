import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModule } from 'src/app/data/user';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit, OnDestroy {
 id!:number;
  private sub: any;
  user:UserModule = new UserModule
  constructor(private route: ActivatedRoute,  private http: HttpClient) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

    this.http.get(`http://localhost:8090/employee/${this.id}`, { observe: 'body', responseType: 'json'}).subscribe(
    data => {
      this.user = (data as UserModule)
    },
    error => {

    }
    );

    });
  }

  edituser(){
    console.log(this.user.name)
    this.http.post(`http://localhost:8090/employee/edit/${this.user.name}`,this.user).subscribe(
      (response) => {
          console.log("Meeting created successfully", response);
      },
      (error) => {
          console.error("Error creating meeting:", error);
      }
  );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
