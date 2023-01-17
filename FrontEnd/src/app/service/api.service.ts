import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  post(arg0: string, arg1: { action: string; }) {
    throw new Error('Method not implemented.');
  }
  //readonly BaseURL ="http://localhost:5000/api/";
  readonly BaseURL ="http://localhost:4201/api/";
  constructor(private httpclient: HttpClient) { }

  //method to get the contacts from the api located at 'http://localhost:4201/heroes'
  public getContactsOfHeros(): Observable<any[]>{
    return this.httpclient.get<any[]>(this.BaseURL +"Heroes"); //Heroes or heroes
  }

  public evolve(action: string, heroName: string){

  }
}
