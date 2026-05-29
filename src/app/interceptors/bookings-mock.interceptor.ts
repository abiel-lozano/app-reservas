import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Booking } from '../models/booking.model';

@Injectable()
export class BookingsMockInterceptor implements HttpInterceptor {
  private data: Booking[] = [
    { id: 1, className: 'Yoga', instructor: 'Laura Gomez', schedule: 'Lunes 18:00', availableSpots: 10 },
    { id: 2, className: 'Crossfit', instructor: 'Marco Diaz', schedule: 'Martes 19:00', availableSpots: 6 },
    { id: 3, className: 'Spinning', instructor: 'Ana Ruiz', schedule: 'Miercoles 20:00', availableSpots: 8 }
  ];

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.method === 'GET' && req.url.endsWith('/bookings')) {
      return of(new HttpResponse({ status: 200, body: this.data })).pipe(delay(600)); // Simulate network delay, show loading state
    }

    return next.handle(req);
  }
}