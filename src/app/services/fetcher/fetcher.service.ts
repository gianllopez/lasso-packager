import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FetcherService {

  constructor(http: HttpClient) {};

  getSong(title: string) {
    console.log(title);
  };

};
