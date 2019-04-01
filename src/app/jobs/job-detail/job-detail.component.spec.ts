import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JobDetailComponent} from './job-detail.component';
import {Router, RouterModule} from '@angular/router';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {JobsService} from '../shared/jobs.service';
import {EffectsModule} from '@ngrx/effects';
import {ActionReducerMap, Store, StoreModule} from '@ngrx/store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import * as jobsReducer from '../store/jobs.reducers';
import {Job} from '../shared/job';
import {MockStore} from '../store/mock-store';

export const reducers: ActionReducerMap<any> = {
  jobs: jobsReducer.reducer
};

describe('JobDetailComponent', () => {
  let component: JobDetailComponent;
  let fixture: ComponentFixture<JobDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        EffectsModule.forRoot([])
      ],
      declarations: [
        JobDetailComponent,
        ExtractNamesPipe
      ],
      providers: [
        JobsService,
        {provide: APP_BASE_HREF, useValue: '/'},
        {
          provide: Store, useValue: new MockStore({
          jobs: {
            data: [],
            selected: {
              'id': '98969442',
              'title': '90 m² Dach neu eindecken, Material benötigt',
              'zip_code': '10115',
              'city': 'Berlin',
              'thumbnail': '//placekitten.com/150/150',
              'attachments': [
                '//placekitten.com/300/200',
                '//placekitten.com/200/400',
                '//placekitten.com/250/250'
              ],
              'counter': {
                'messages_total': 4,
                'messages_unread': 1
              },
              'is_awarded': true,
              'categories': [
                {
                  'id': '41'
                },
                {
                  'id': '58'
                }
              ],
              'state': 'active',
              'description': `Eum accusata erroribus ei, te usu homero nostrud. Sed te
              tractatos dissentiet, id saperet luptatum forensibus est. His idque tibique
              periculis ut, quis principes consulatu ad per. Impedit periculis voluptaria mel
              eu, periculis intellegat incorrupte his an, ex vis adhuc saepe habemus.
              Ei vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam
              et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem.
              Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at,
              ludus vidisse ei mei. Eum alia concludaturque cu, nam veri utinam ea.
              No cetero commune placerat nam.`,
              'end_date': '2018-10-31T14:14:32+01:00',
              'created_at': '2018-10-01T14:14:32+02:00'
            },
            action: 'GET_JOB',
            done: true
          }
        })
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the title 'Job Details'`, () => {
    expect(component.title).toEqual('Job Details');
  });
});
