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
  selector: 'app-booking-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-detail.component.html',
  styleUrl: './booking-detail.component.scss'
})
export class BookingDetailComponent {
  selected: Booking | null = {
    id: 1,
    className: 'Yoga',
    instructor: 'Laura Gomez',
    schedule: 'Lunes 18:00',
    availableSpots: 10
  };

  reserve(): void {
    // TODO: conectar con servicio
    console.log('Reserved', this.selected);
  }
}