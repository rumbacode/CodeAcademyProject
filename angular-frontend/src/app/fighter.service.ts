import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Fighter } from './fighter';

@Injectable({
  providedIn: 'root'
})
export class FighterService {
  private baseURL = "http://localhost:8080/api/v1/fighters";

  constructor(private httpClient: HttpClient) { }

  getFightersList(): Observable<Fighter[]>{
    return this.httpClient.get<Fighter[]>(`${this.baseURL}`);
  }

  createFighter(fighter: Fighter): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, fighter);
  }

  getFighterById(id: number): Observable<Fighter>{
    return this.httpClient.get<Fighter>(`${this.baseURL}/${id}`);
  }

  updateFighter(id: number, fighter: Fighter): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, fighter);
  }

  deleteFighter(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
