import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly BaseURL ="http://localhost:4201/api/";

  constructor(private httpclient: HttpClient) { }
  //method to get the contacts from the api located at 'http://localhost:4201/heroes'
  public getContactsOfHeros(): Observable<any[]>{
    return this.httpclient.get<any[]>(this.BaseURL +"heroes"); //Heroes or heroes
  }
}
