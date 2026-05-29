import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingStateService } from '../../services/booking-state.service';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-booking-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-detail.component.html',
  styleUrl: './booking-detail.component.scss'
})
export class BookingDetailComponent {
  selected$: Observable<Booking | null>;

  constructor(private bookingState: BookingStateService) {
    this.selected$ = this.bookingState.selected$;
  }

  reserve(selected: Booking): void {
    console.log('Reserved', selected);
  }
}