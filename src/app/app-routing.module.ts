import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminControlsComponent } from './admin-controls/admin-controls.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LoginComponent } from './login/login.component';
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
const routes: Routes = [
  {path: "admin", component: AdminControlsComponent},
  {path: "employee", component: EmployeeDashboardComponent},
  {path: "login", component: LoginComponent},
  {path: "addmeeting", component: CreatemeetingsComponent},
  {path: "addannouncement", component: CreateannouncementsComponent},
  {path: "adduser", component: AdduserComponent},
  {path: "edituser/:id", component: EdituserComponent},
  {path:"makeconge", component:MakecongeComponent},
  {path:"createjob", component:CreatejobComponent},
  {path:"jobs",component:JobmenuComponent},
  {path:"apply/:id",component:ApplicationformComponent},
  {path:"makesuggestion", component:MakesuggestionComponent},
  {path:"", component:HomeComponent},
  {path:"fichepaie",component:FicheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
