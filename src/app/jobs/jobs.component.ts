import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../app.state';
import {GetAllJobs} from './store/jobs.actions';
import {getJobsError} from './store/jobs.reducers';

@Component({
  selector: 'app-jobs',
  template: `
    <router-outlet></router-outlet>`,
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private router: Router,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    console.log('... Initializing Jobs component');
    this.store.dispatch(new GetAllJobs());

    // subscriptions when success or error action
    this.store.select(getJobsError).subscribe((error) => this.loadingError(error));
  }

  /**
   * Display error message if load of jobs fails
   */
  loadingError(error) {
    if (error) {
      alert('Error while loading the list of jobs');
    }
  }

  /**
   * Display success message after execute specific action over the job
   * @param done true if action was completed or false
   * @param message the message to be displayed
   */
  actionSuccess(done: boolean, message: string) {
    if (done) {
      alert(message);
      this.router.navigate(['/jobs']);
    }
  }

  /**
   * Display error message is execution of action fails
   * @param error the error thrown
   * @param message the message to be displayed
   */
  actionError(error, message: string) {
    if (error) {
      alert(message);
    }
  }
}
