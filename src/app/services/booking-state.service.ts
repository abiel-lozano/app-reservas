import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Booking } from '../models/booking.model';

@Injectable({ providedIn: 'root' })
export class BookingStateService {
  private selectedSubject = new BehaviorSubject<Booking | null>(null);
  selected$ = this.selectedSubject.asObservable();

  setSelected(booking: Booking): void {
    this.selectedSubject.next(booking);
  }
}