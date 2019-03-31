import * as jobActions from './jobs.actions';
import {AppAction} from '../../app.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Job} from '../shared/job';

export interface State {
  data: Job[];
  selected: Job;
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: State = {
  data: [],
  selected: null,
  action: null,
  done: false,
  error: null
};

export function reducer(state = initialState, action: AppAction): State {
  // ...state create immutable state object
  switch (action.type) {
      /*************************
     * GET all jobs actions
     ************************/
    case jobActions.GET_JOBS:
      return {
        ...state,
        action: jobActions.GET_JOBS,
        done: false,
        selected: null,
        error: null
      };
    case jobActions.GET_JOBS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        selected: null,
        error: null
      };
    case jobActions.GET_JOBS_ERROR:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };

      /*************************
     * GET job by id actions
     ************************/
    case jobActions.GET_JOB:
      return {
        ...state,
        action: jobActions.GET_JOB,
        done: false,
        selected: null,
        error: null
      };
    case jobActions.GET_JOB_SUCCESS:
      return {
        ...state,
        selected: action.payload,
        done: true,
        error: null
      };
    case jobActions.GET_JOB_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };
  }
  return state;
}

/*************************
 * SELECTORS
 ************************/
export const getJobsState = createFeatureSelector < State > ('jobs');
export const getAllJobs = createSelector(getJobsState, (state: State) => state.data);
export const getJob = createSelector(getJobsState, (state: State) => {
  if (state.action === jobActions.GET_JOB && state.done) {
    return state.selected;
  } else {
    return null;
  }

});
export const getJobsError = createSelector(getJobsState, (state: State) => {
  return state.action === jobActions.GET_JOBS
    ? state.error
   : null;
});
export const getJobError = createSelector(getJobsState, (state: State) => {
  return state.action === jobActions.GET_JOB
    ? state.error
   : null;
});
