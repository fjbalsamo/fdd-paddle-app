# Story

FDD-007: Como socio, quiero distinguir de un vistazo los turnos disponibles, ocupados y no disponibles, para encontrar lugar rápido.

## Capabilities

### Modified Capabilities
- `court-availability`: cada estado de turno ("Disponible", "Ocupado", "No disponible") se distingue visualmente de los otros dos, sin cambiar qué estado tiene cada turno.

## Out of scope

- Cambiar cómo se determina el estado de un turno (ocupación del día, turnos pasados).
- Reservar o cancelar turnos.
- Actualizar los estados sin recargar (FDD-006).

## Assumptions

- A1 Cada estado se distingue por un aspecto visual propio y además conserva su texto ("Disponible", "Ocupado", "No disponible"), para no depender solo del color — affects: escenario de distinción visual — status: to validate

## Expensive decisions

ADR 002 (docs/adrs/002-mui-para-la-ui.md): librería de UI adoptada para el portal.

## Definition of Done

demo
