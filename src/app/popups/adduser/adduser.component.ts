import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModule } from 'src/app/data/user';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  user: UserModule = new UserModule;
  private sub: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  adduser(){
    this.http.post("http://localhost:8090/addemployee",this.user).subscribe(
      (response) => {
          console.log("Meeting created successfully", response);
      },
      (error) => {
          console.error("Error creating meeting:", error);
      }
  );
  }
}
