import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminControlsComponent } from './admin-controls/admin-controls.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatemeetingsComponent } from './popups/createmeetings/createmeetings.component';
import { CreateannouncementsComponent } from './popups/createannouncements/createannouncements.component';
import { AdduserComponent } from './popups/adduser/adduser.component';
import { EdituserComponent } from './popups/edituser/edituser.component';
import { MakecongeComponent } from './popups/makeconge/makeconge.component';
import { CreatejobComponent } from './popups/createjob/createjob.component';
import { JobmenuComponent } from './jobmenu/jobmenu.component';
import { ApplicationformComponent } from './applicationform/applicationform.component';
import { MakesuggestionComponent } from './popups/makesuggestion/makesuggestion.component';
import { HomeComponent } from './home/home.component';
import { FicheComponent } from './fiche/fiche.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminControlsComponent,
    EmployeeDashboardComponent,
    CreatemeetingsComponent,
    CreateannouncementsComponent,
    AdduserComponent,
    EdituserComponent,
    MakecongeComponent,
    CreatejobComponent,
    JobmenuComponent,
    ApplicationformComponent,
    MakesuggestionComponent,
    HomeComponent,
    FicheComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
