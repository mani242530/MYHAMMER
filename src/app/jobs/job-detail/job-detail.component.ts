import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {GetJob} from '../store/jobs.actions';
import {Observable} from 'rxjs/Observable';
import {Job} from '../shared/job';
import {getJob} from '../store/jobs.reducers';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  title = 'Job Details';
  job: Observable<Job>;

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(new GetJob(+params['id']));
    });
    this.job = this.store.select(getJob);
  }

}
