import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import * as JobActions from './jobs.actions';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {
  GetAllJobsError, GetAllJobsSuccess,
  GetJob, GetJobError, GetJobSuccess
} from './jobs.actions';
import {JobsService} from '../shared/jobs.service';

@Injectable()
export class JobEffects {
  constructor(private actions$: Actions,
              private jobService: JobsService) {
  }

  @Effect()
  getAllJobs$: Observable<Action> = this.actions$
    .ofType(JobActions.GET_JOBS)
    .switchMap(() => this.jobService.findAll())
    .map(jobs => new GetAllJobsSuccess(jobs))
    .catch((err) => [new GetAllJobsError(err)]);

  @Effect()
  getJob$ = this.actions$
    .ofType(JobActions.GET_JOB)
    .map((action: GetJob) => action.payload)
    .switchMap(id => this.jobService.findById(id))
    .map(job => new GetJobSuccess(job))
    .catch((err) => [new GetJobError(err)]);
}
