import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {JobsComponent} from './jobs.component';
import {JobsService} from './shared/jobs.service';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Store} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {MockStore} from './store/mock-store';

describe('JobsComponent', () => {
  let component: JobsComponent;
  let fixture: ComponentFixture<JobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        EffectsModule
      ],
      declarations: [
        JobsComponent
      ],
      providers: [
        JobsService,
        {provide: APP_BASE_HREF, useValue: '/'},
        {
          provide: Store, useValue: new MockStore({
          jobs: {
            data: [
              {
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
              }, {
                'id': '68934444',
                'title': '2 Scheiben in Altbau-Balkontür austauschen',
                'zip_code': '10115',
                'city': 'Berlin',
                'thumbnail': '//placekitten.com/300/200',
                'attachments': [],
                'counter': {
                  'messages_total': 1,
                  'messages_unread': 0
                },
                'is_awarded': false,
                'categories': [
                  {
                    'id': '33'
                  }
                ],
                'state': 'active',
                'description': `Ei vel exerci eripuit apeirian. Mei ei partiendo consetetur
                honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut,
                ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix,
                simul audire pro at, ludus vidisse ei mei.\r\n\r\nEum alia concludaturque cu,
                nam veri utinam ea. No cetero commune placerat nam.`,
                'end_date': '2018-11-28T16:10:02+01:00',
                'created_at': '2018-10-11T04:14:32+02:00'
              }
            ],
            selected: null,
            action: 'GET_JOBS',
            done: true
          }
        })
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
