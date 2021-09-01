import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Question, Song } from 'src/app/shared/shared.models';

@Injectable({ providedIn: 'root' })
export class FetcherService {

  constructor(private http: HttpClient) {};

  getSong(title: string): Observable<Song[]> {
    return this.http.post<Song[]>(env.api, { title });
  };
  
  getUrl(title: string): Promise<any> {
    let path = `${env.api}/get-url`
    return this.http.post<any>(path, { title }).toPromise();
  };
  
  askQuestion(question: Question): Promise<{ sent: boolean }> {
    let path = `${env.api}/ask`
    return this.http.post<any>(path, { question }).toPromise();
  };

};
