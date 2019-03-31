import {NgModule} from '@angular/core';
import {JobsService} from './shared/jobs.service';
import {jobsRoutedComponents, JobsRoutingModule} from './jobs-routing.module';
import {SharedModule} from '../shared/shared.module';

// ngrx elements
import {StoreModule, ActionReducerMap} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {JobEffects} from './store/jobs.effects';
import * as jobReducer from './store/jobs.reducers';

export const reducers: ActionReducerMap<any> = {
  jobs: jobReducer.reducer
};

@NgModule({
  imports: [
    SharedModule,
    JobsRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([JobEffects])
  ],
  declarations: [jobsRoutedComponents],
  providers: [JobsService]
})
export class JobsModule {
}
