import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardListService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/list`).pipe(
      catchError((error) => {
        console.error('Error in the service:', error);
        return throwError(error); // Rethrow the error after logging
      })
    );
  }
}
