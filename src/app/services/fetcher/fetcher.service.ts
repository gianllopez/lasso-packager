import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class FetcherService {

  constructor(private http: HttpClient) {};

  getSong(title: string) {
    if (title) {
      this.http.post(environment.api, { title })
        .subscribe(data => console.log(data))
    };
  };

};
