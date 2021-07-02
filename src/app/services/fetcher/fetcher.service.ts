import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Song } from 'src/app/shared/shared.models';

@Injectable({ providedIn: 'root' })
export class FetcherService {

  constructor(private http: HttpClient) {};

  getSong(title: string) {
    return this.http.post<Song[]>(env.api, { title });
  };

};
