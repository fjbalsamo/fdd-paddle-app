# Story

Como socio, quiero ver las canchas y sus horarios del día, para saber cuándo hay lugar.

## Capabilities

### New Capabilities
- `court-availability`: ver, para el día de hoy, los turnos de cada cancha y si están libres u ocupados.

## Out of scope

- Reservar o cancelar turnos.
- Elegir otra fecha / navegar entre días (historia futura).
- Backend y persistencia: la ocupación sale de datos de ejemplo fijos en memoria (su forma servirá de insumo para diseñar el backend).
- Login / identificación del socio.
- Estilos / UX (colores para Libre/Ocupado, posible MUI) → próxima historia: "Como socio, quiero distinguir de un vistazo los turnos libres de los ocupados, para encontrar lugar más rápido."
- Turnos ya pasados → próxima historia: "Como socio, quiero que los turnos que ya pasaron no figuren como libres, para no confundirlos con lugar disponible."

## Assumptions

- A1 Turnos de hoy ya pasados se muestran igual que el resto (sin marcarlos ni ocultarlos) — affects: Ver turnos del día — status: rejected → backlog (un turno pasado no debe verse "Libre")
- A2 Vista pensada para celular: una sección por cancha con su lista de turnos — affects: Ver turnos del día — status: confirmed (M1)

## Expensive decisions

None

## Definition of Done

demo
