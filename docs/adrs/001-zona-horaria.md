# 001 - Zona horaria

## Context
Las historias que dependen de la hora actual (por ejemplo, saber si un turno ya pasó) necesitan una zona horaria de referencia. El portal es para un único club de barrio y sus socios lo usan desde el celular, que puede estar configurado en otra zona.

## Decision
Toda evaluación de "ahora" y de horarios de turnos usa la zona horaria del club, fija: America/Argentina/Buenos_Aires. No se usa la zona horaria del dispositivo del socio.

## Consequences
- Un socio ve lo mismo sin importar la zona horaria de su dispositivo.
- Si el club cambiara de zona o se sumaran clubes en otras zonas, habría que revisar esta decisión.
