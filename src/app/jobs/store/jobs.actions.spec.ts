import {
    GetAllJobs,
    GET_JOBS,
    GET_JOBS_SUCCESS,
    GetAllJobsSuccess,
    GetAllJobsError,
    GET_JOBS_ERROR,
    GetJob,
    GET_JOB,
    GetJobSuccess,
    GET_JOB_SUCCESS,
    GetJobError,
    GET_JOB_ERROR
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
/****************************************
 * GET all the jobs
 ****************************************/
describe('Load All Jobs ACTION', () => {
    it('should create the action GET_JOBS', () => {
        const action = new GetAllJobs();
        expect({...action}).toEqual({type: GET_JOBS});
    });
    it('should create the action GET_JOBS_SUCCESS', () => {
        const payload = [...MOCK_DATA];
        const action = new GetAllJobsSuccess(payload);
        expect({...action}).toEqual({type: GET_JOBS_SUCCESS, payload});
    });
    it('should create the action GET_JOBS_ERROR', () => {
        const payload = new Error('Error loading all jobs');
        const action = new GetAllJobsError(payload);
        expect({...action}).toEqual({
            type: GET_JOBS_ERROR, payload
        });
    });
});
/****************************************
 * GET job by id
 ****************************************/
describe('Load specific Job ACTION', () => {
    it('should create the action GET_JOB', () => {
        const payload = MOCK_DATA[0].id;
        const action = new GetJob(payload);
        expect({...action}).toEqual({ type: GET_JOB, payload });
    });
    it('should create the action GET_JOB_SUCCESS', () => {
        const payload = MOCK_DATA[0];
        const action = new GetJobSuccess(payload);
        expect({...action}).toEqual({ type: GET_JOB_SUCCESS, payload });
    });
    it('should create the action GET_JOB_ERROR', () => {
        const payload = new Error('Error loading the job');
        const action = new GetJobError(payload);
        expect({...action}).toEqual({
            type: GET_JOB_ERROR, payload
        });
    });
});
