import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightInfoPayload } from '../interface/flightinfo';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  submitFlightInfo(payload: FlightInfoPayload): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh',
      'candidate': 'Venkatesh Morpoju' 
    });
    return this.http.post('https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge', payload, { headers });
  }
}
