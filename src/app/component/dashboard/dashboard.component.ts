import { Component } from '@angular/core';

import { FlightService } from '../../service/flight.service';
import { AuthService } from '../../service/auth.service';

import { FlightInfoPayload } from '../../interface/flightinfo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  payload: FlightInfoPayload;
  currentDate: Date;

  constructor(
    private flightService: FlightService,
    private authService: AuthService
  ) {
    this.payload = {
      airline: '',
      arrivalDate: '',
      arrivalTime: '',
      flightNumber: '',
      numOfGuests: 1,
      comments: '',
    };
    this.currentDate = new Date();
  }

  logout() {
    this.authService.logout();
  }

  submitForm() {
    const selectedDate = new Date(this.payload.arrivalDate);

    if (
      this.payload.airline.length < 1 ||
      this.payload.arrivalDate.length < 1 ||
      this.payload.arrivalTime.length < 1 ||
      this.payload.flightNumber.length < 1
    ) {
      alert('Please fill in all fields');
      return;
    }

    if (selectedDate <= this.currentDate) {
      alert('Arrival date cannot be in the past');
      return;
    }

    this.flightService.submitFlightInfo(this.payload).subscribe(
      (response: any) => {
        alert('Flight details submitted successfully!');
      },
      (error: any) => {
        console.error('Request failed:', error);
        alert('Failed to submit flight details. Please try again later.');
      }
    );
  }
}
