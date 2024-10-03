import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { eshwar } from '../models/eshwar.module'; // Correct path to eshwar.module.ts

@Injectable({
  providedIn: 'root',
})
export class PatilService { // Updated service name
  private apiUrl = 'your-api-url'; // Set your API URL here

  constructor(private http: HttpClient) {}

  geteshwars(): Observable<eshwar[]> { // Updated method and type
    return this.http.get<eshwar[]>(this.apiUrl + '/eshwars'); // Adjust API endpoint
  }

  addeshwar(eshwar: eshwar): Observable<eshwar> { // Updated method and type
    return this.http.post<eshwar>(this.apiUrl + '/eshwars', eshwar); // Adjust API endpoint
  }
}

