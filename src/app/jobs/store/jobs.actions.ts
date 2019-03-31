import {Action} from '@ngrx/store';
import {Job} from '../shared/job';

export const GET_JOBS = '[ALL] Jobs';
export const GET_JOBS_SUCCESS = '[ALL] Jobs Success';
export const GET_JOBS_ERROR = '[ALL] Jobs Error';

export const GET_JOB = '[GET] Job';
export const GET_JOB_SUCCESS = '[GET] Job Success';
export const GET_JOB_ERROR = '[GET] Job Error';

/****************************************
 * GET all the jobs
 ****************************************/
export class GetAllJobs implements Action {
  readonly type = GET_JOBS;
}

export class GetAllJobsSuccess implements Action {
  readonly type = GET_JOBS_SUCCESS;

  constructor(public payload: Job[]) {
  }
}

export class GetAllJobsError implements Action {
  readonly type = GET_JOBS_ERROR;

  constructor(public payload: Error) {
  }
}

/****************************************
 * GET job by id
 ****************************************/
export class GetJob implements Action {
  readonly type = GET_JOB;

  constructor(public payload: number) {
  }
}

export class GetJobSuccess implements Action {
  readonly type = GET_JOB_SUCCESS;

  constructor(public payload: Job) {
  }
}

export class GetJobError implements Action {
  readonly type = GET_JOB_ERROR;

  constructor(public payload: Error) {
  }
}
