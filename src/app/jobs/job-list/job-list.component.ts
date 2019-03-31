import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {Job} from '../shared/job';
import {Observable} from 'rxjs/Observable';
import {getAllJobs} from '../store/jobs.reducers';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  title = 'List of Active Jobs';
  jobs: Observable<Job[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    console.log('... initializing Job list component.');
    this.jobs = this.store.select(getAllJobs);
  }

}
