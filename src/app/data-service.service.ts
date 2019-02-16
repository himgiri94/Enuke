import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataServiceService {

  constructor(
    public http: HttpClient
  ) { }

  public getUser() {
    return this.http.get('/assets/userData.json')
  }

}
