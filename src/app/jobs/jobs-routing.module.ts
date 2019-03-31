import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

// components
import {JobsComponent} from './jobs.component';
import {JobListComponent} from './job-list/job-list.component';
import {JobDetailComponent} from './job-detail/job-detail.component';

export const jobsRoutes: Routes = <Routes>[{
  path: '',
  component: JobsComponent,
  children: [
    {path: '', component: JobListComponent},
    {path: 'detail/:id', component: JobDetailComponent}
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(jobsRoutes)
  ],
  exports: [RouterModule]
})
export class JobsRoutingModule {
}

export const jobsRoutedComponents = [
  JobsComponent,
  JobListComponent,
  JobDetailComponent
];
