import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  full_name: string;
  gender: string;
  location: string;
  email: string;
  birth_date: string;
  picture_url: string;
}

@Injectable({ providedIn: 'root' })
export class PeopleService {
  private baseUrl = 'http://127.0.0.1:8002';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseUrl}/people`);
  }
}
