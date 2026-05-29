import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { BookingStateService } from '../../services/booking-state.service';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.scss'
})
export class BookingListComponent {
  isLoading = true;
  hasError = false;
  bookings: Booking[] = [];

  constructor(
    private bookingService: BookingService,
    private bookingState: BookingStateService
  ) {
    this.load();
  }

  load(): void {
    this.isLoading = true;
    this.hasError = false;

    this.bookingService.getBookings().subscribe({
      next: (data) => {
        this.bookings = data;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  selectBooking(booking: Booking): void {
    this.bookingState.setSelected(booking);
  }
}