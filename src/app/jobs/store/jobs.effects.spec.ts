import {TestBed, async} from '@angular/core/testing';
import {Actions} from '@ngrx/effects';
import {JobEffects} from './jobs.effects';
import {cold} from 'jasmine-marbles';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {
  GET_JOBS_SUCCESS,
  GET_JOBS,
  GetAllJobsSuccess,
  GetAllJobsError,
  GET_JOB,
  GetJobSuccess,
  GetJobError
} from './jobs.actions';
import {Job} from '../shared/job';

const MOCK_DATA: Job[] = [
  {
    id: 98969442,
    title: '90 m² Dach neu eindecken, Material benötigt',
    zip_code: '10115',
    city: 'Berlin',
    thumbnail: '//placekitten.com/150/150',
    attachments: [
      '//placekitten.com/300/200',
      '//placekitten.com/200/400',
      '//placekitten.com/250/250'
    ],
    counter: {
      'messages_total': 4,
      'messages_unread': 1
    },
    is_awarded: true,
    categories: [],
    state: 'active',
    description: `Eum accusata erroribus ei, te usu homero nostrud. Sed te
      tractatos dissentiet, id saperet luptatum forensibus est. His idque tibique
      periculis ut, quis principes consulatu ad per. Impedit periculis voluptaria mel
      eu, periculis intellegat incorrupte his an, ex vis adhuc saepe habemus.
      Ei vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam
      et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem.
      Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at,
      ludus vidisse ei mei. Eum alia concludaturque cu, nam veri utinam ea.
      No cetero commune placerat nam.`,
    end_date: new Date('2018-10-31T14:14:32+01:00'),
    created_at: new Date('2018-10-01T14:14:32+02:00')
  },
  {
    id: 68934444,
    title: '2 Scheiben in Altbau-Balkontür austauschen',
    zip_code: '10115',
    city: 'Berlin',
    thumbnail: '//placekitten.com/300/200',
    attachments: [],
    counter: {
      messages_total: 1,
      messages_unread: 0
    },
    is_awarded: false,
    categories: [],
    state: 'active',
    description: `Ei vel exerci eripuit apeirian. Mei ei partiendo consetetur
      honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut,
      ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix,
      simul audire pro at, ludus vidisse ei mei.\r\n\r\nEum alia concludaturque cu,
      nam veri utinam ea. No cetero commune placerat nam.`,
    end_date: new Date('2018-11-28T16:10:02+01:00'),
    created_at: new Date('2018-10-11T04:14:32+02:00')
  },
  {
    id: 38934412,
    title: '15 Holz- Altbau Türen weiß-matt lackieren.',
    zip_code: '10115',
    city: 'Berlin',
    thumbnail: '//placekitten.com/250/350',
    attachments: [
      '//placekitten.com/335/400',
      '//placekitten.com/150/400',
      '//placekitten.com/250/350'
    ],
    counter: {
      messages_total: 10,
      messages_unread: 2
    },
    is_awarded: false,
    categories: [],
    state: 'inactive',
    description: `Eum alia concludaturque cu, nam veri utinam ea. No cetero
      commune placerat nam.`,
    end_date: new Date('2018-09-14T08:30:45+01:00'),
    created_at: new Date('2018-08-11T14:14:32+02:00')
  }
];

describe('JobEffects', () => {
  let service: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JobEffects
      ]
    });
    service = jasmine.createSpyObj('svc', ['findAll', 'findById', 'update', 'insert', 'delete']);
  });

  describe('getAllJobs$', () => {
    it('should return a GET_JobS_SUCCESS action, with the Jobs, on success', () => {
      service.findAll.and.returnValue(Observable.of(MOCK_DATA));
      const source = cold('a', {a: {type: GET_JOBS}});
      const effects = new JobEffects(new Actions(source), service);
      const expected = cold('a', {a: new GetAllJobsSuccess(MOCK_DATA)});

      expect(effects.getAllJobs$).toBeObservable(expected);
    });

    it('should return a GET_JobS_ERROR action, with the error', () => {
      const error = new Error('Error loading Jobs');
      service.findAll.and.returnValue(Observable.throw(error));

      const source = cold('a', {a: {type: GET_JOBS}});
      const effects = new JobEffects(new Actions(source), service);

      effects.getAllJobs$.subscribe(result => {
        expect(result).toEqual(new GetAllJobsError(error));
      });
    });
  });

  describe('getJob$', () => {
    it('should return a GET_Job_SUCCESS action, with the Job found, on success', () => {
      const data = MOCK_DATA[0];
      service.findById.and.returnValue(Observable.of(data));
      const source = cold('a', {a: {type: GET_JOB}});
      const effects = new JobEffects(new Actions(source), service);
      const expected = cold('a', {a: new GetJobSuccess(data)});

      expect(effects.getJob$).toBeObservable(expected);
    });

    it('should return a GET_Job_ERROR action, with the error', () => {
      const data = MOCK_DATA[0];
      const error = new Error(`Error loading the Job with id ${data.id}`);
      service.findById.and.returnValue(Observable.throw(error));

      const source = cold('a', {a: {type: GET_JOB}});
      const effects = new JobEffects(new Actions(source), service);

      effects.getJob$.subscribe(result => {
        expect(result).toEqual(new GetJobError(error));
      });
    });
  });
});
