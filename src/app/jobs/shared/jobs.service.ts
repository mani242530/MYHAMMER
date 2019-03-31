import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Job} from './job';

@Injectable()
export class JobsService {
  protected URL = 'http://localhost:3000/api/jobs';

  constructor(protected http: HttpClient) {
  }

  /**
   * Find an object by its identifier
   * @param id the object identifier
   * @returns gets the object found
   */
  public findById(id: any): Observable<Job> {
    return this.http.get<Job>(this.URL + '/' + id);
  }

  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(params?): Observable<Job[]> {
    return this.http.get<Job[]>(this.URL, {params: params});
  }

}
