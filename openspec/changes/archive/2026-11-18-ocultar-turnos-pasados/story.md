# Story

FDD-005. Como socio, quiero que los turnos que ya pasaron no figuren como disponibles, para no intentar reservar algo imposible.

## Capabilities

### Modified Capabilities
- `court-availability`: los turnos del día que ya pasaron se muestran como "No disponible".

## Out of scope

- Reservar un turno (FDD-002).
- Mostrar días distintos de hoy.

## Assumptions

- A1 Un turno "ya pasó" cuando su hora de inicio es anterior o igual a la hora actual, aunque siga en curso — affects: turnos pasados — status: confirmed (demo)

## Expensive decisions

Zona horaria: America/Argentina/Buenos_Aires, fija — ADR `docs/adrs/001-zona-horaria.md`.

## Definition of Done

demo
