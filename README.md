# App Reservas - Gimnasio

Pequena app en Angular para simular la reserva de clases de deporte en un gimnasio..

## Requisitos
- Angular CLI: **17.3.17**
- Node.js: **22.22.3** (Para Angular 17~ se recomiendan mas bajas como 18~, pero no hubo problemas con esta versión)

## Instalacion y ejecucion
```powershell
npm install
ng serve
```
Abrir `http://localhost:4200` en el navegador para ver la aplicación.

### Architectura de componentes
- `AppComponent`: layout general y distribucion de la vista.
- `BookingListComponent`: listado de tarjetas con estados (loading, error, empty).
- `BookingDetailComponent`: muestra detalle de la clase seleccionada y accion de reservar.

### Comunicación entre componentes
Se eligió un servicio compartido con `BehaviorSubject` porque evita pasar props a través de varios niveles al hacer que la lista y el detalle se mantengan sincronizados.

### Consumo de datos
Se hace una simulación de un endpoint REST usando `HttpClient` con un HTTP interceptor que responde a `GET /bookings` para tener un flujo HTTP sin tener backend.

### Estructura del proyecto
- `components/`: Contiene ambos componentes de UI.
- `services/`: lógica de datos y estado compartido.
- `models/`: interface de booking

### Decisiones y tradeoffs de desarrollo
- Standalone components y @if/@for para evitar funcionalidades deprecadas.
- Mock via interceptor para cumplir el flujo HTTP real
- Lo que se dejó fuera por tiempo: tests unitarios, animaciones en UI, despliege a la webv, formularios de reserva con Reactive Forms.
