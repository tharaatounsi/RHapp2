import { Component, OnDestroy, OnInit } from '@angular/core';
import { Applicant } from '../data/Applicant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute } from '@angular/router';
import { job } from '../data/job';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-applicationform',
  templateUrl: './applicationform.component.html',
  styleUrls: ['./applicationform.component.css']
})
export class ApplicationformComponent implements OnInit ,OnDestroy {
  extractedText!: string;
  constructor(private http:HttpClient, private auth: AuthServiceService,private route: ActivatedRoute){}
  id!:number;
  private sub: any;
  job!:job
  xp!:number
  pdfSrc!: string;
  pdfText = '';

  name!:string;
  phone!:number;
  email!:string;

  pdfData!: File;





handleFileInput(files: FileList) {
  if (files.length > 0) {
    this.pdfData = files[0]
  }
}
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.http.get(`http://localhost:8090/joboffer/${this.id}`, { observe: 'body', responseType: 'json'}).subscribe(
      data => {
        this.job = (data as job)
      },
      error => {

      }
      );
  }

  apply(){
    let a:Applicant = new Applicant
    a.jobid = this.id;
    a.name = this.name
    a.phone = this.phone
    a.email = this.email
    a.cv = this.pdfData

    const formData = new FormData();
    formData.append('xp', this.xp.toString());
    formData.append('jobid', a.jobid.toString());
    formData.append('name', a.name);
    formData.append('phone', a.phone.toString());
    formData.append('email', a.email);

    this.http.post(`http://localhost:8090/applyforjob/${this.job.title}/${this.name}/${this.phone}/${this.xp}/${this.email}`, null).subscribe(
      response => {
        console.log('Applicant sent successfully', response);
      },
      error => {
        console.error('Error sending applicant', error);
      }
    );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
