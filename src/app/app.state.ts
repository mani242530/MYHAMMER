import * as fromJobs from './jobs/store/jobs.reducers';

export interface AppState {
  jobs: fromJobs.State;
}
