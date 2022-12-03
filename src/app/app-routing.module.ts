import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { CreateJobComponent } from './create-job/create-job.component';

const routes: Routes = [
{ path: 'jobs-component', component: JobsComponent },
{ path: 'createJob-component', component: CreateJobComponent },
{ path: '',   redirectTo: '/createJob-component', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
