import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  constructor(private http: Http) {}

  public getUserData(): Observable<any> {
    return this.http.get("assets/resume-data.json")
      .pipe(map((response: Response) => response.json()));

  }
}
