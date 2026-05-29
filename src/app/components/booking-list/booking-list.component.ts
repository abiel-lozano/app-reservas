import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Booking {
  id: number;
  className: string;
  instructor: string;
  schedule: string;
  availableSpots: number;
}

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.scss'
})
export class BookingListComponent {
  isLoading = false;
  hasError = false;

  bookings: Booking[] = [
    { id: 1, className: 'Yoga', instructor: 'Laura Gomez', schedule: 'Lunes 18:00', availableSpots: 10 },
    { id: 2, className: 'Crossfit', instructor: 'Marco Diaz', schedule: 'Martes 19:00', availableSpots: 6 },
    { id: 3, className: 'Spinning', instructor: 'Ana Ruiz', schedule: 'Miercoles 20:00', availableSpots: 8 }
  ];

  selectBooking(booking: Booking): void {
    // TODO: enviar seleccion al servicio compartido
    console.log('Selected booking', booking);
  }
}