import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReportComponent } from 'src/app/components/create-report/create-report.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { ReportListComponent } from 'src/app/components/report-list/report-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  
  {path: 'report-list', component: ReportListComponent},
  {path: 'addReport', component: CreateReportComponent},
  {path: 'logo', component: LogoComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  // {path: 'employees', redirectTo: 'employees', pathMatch: 'full'},
  // {path: 'create-employee', component: CreateEmployeeComponent},
  // {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  // {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
