# Plan

- Datos: sin cambios; la ocupación del día sigue siendo la misma lista en memoria.
- Hora actual: se toma en la zona horaria fija del club (ADR 001), no la del dispositivo del socio.
- Estado: un turno cuyo inicio es igual o anterior a la hora actual se ve "No disponible", con prioridad sobre "Ocupado" y "Disponible".
- UI: la grilla mantiene su estructura; solo suma el nuevo estado visible en cada turno.
- Hook de test: la pantalla acepta opcionalmente la hora actual como entrada para fijarla en los tests; sin ella usa el reloj real.

## Decisions needing an ADR

None (la zona horaria ya está decidida en el ADR 001).
