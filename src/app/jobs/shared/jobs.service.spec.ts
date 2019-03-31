import {async, TestBed, inject, getTestBed} from '@angular/core/testing';

import {JobsService} from './jobs.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {BrowserModule} from '@angular/platform-browser';
import {Job} from './job';

const BASE_URL = 'http://localhost:3000/api/jobs';
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
    description: `Ei vel exerci eripuit apeirian. Mei ei partiendo consetetu
    honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut,
    ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix
    simul audire pro at, ludus vidisse ei mei.\r\n\r\nEum alia concludaturque cu,
    nam veri utinam ea. No cetero commune placerat nam.`,
    end_date: new Date('2018-11-28T16:10:02+01:00'),
    created_at: new Date('2018-10-11T04:14:32+02:00')
  }
];

describe('JobsService', () => {
  let injector: TestBed;
  let service: JobsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule, HttpClientModule, HttpClientTestingModule
      ],
      providers: [JobsService]
    });

    injector = getTestBed();
    service = injector.get(JobsService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', inject([JobsService], (svg: JobsService) => {
    expect(svg).toBeTruthy();
  }));

  it('should get list of all jobs', async(() => {
    service
      .findAll()
      .subscribe((data: Job[]) => {
        expect(data.length).toBe(2);
        expect(data[0]).toBe(MOCK_DATA[0]);
        expect(data[1]).toBe(MOCK_DATA[1]);
      });

    const req = httpMock.expectOne(BASE_URL);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_DATA);
  }));

  it('should get job by id', async(() => {
    const id = 1;
    service
      .findById(id)
      .subscribe((response: Job) => {
        expect(response).toBe(MOCK_DATA[0]);
      });

    const req = httpMock.expectOne(`${BASE_URL}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_DATA[0]);
  }));
});
