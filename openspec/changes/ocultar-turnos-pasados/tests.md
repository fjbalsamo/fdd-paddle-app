# Tests

## Automated

- ~~T1 Con la hora actual anterior al primer turno y datos que marcan turnos ocupados, esos turnos muestran "Ocupado" y el resto "Disponible" — level: component — covers: Distinguir turnos disponibles y ocupados~~ — descartado: duplica el test previo (`ver-disponibilidad-canchas` T3) una vez modificado, que ahora cubre este escenario
- [x] T2 A las 13:00, los turnos de 8:00, 9:30, 11:00 y 12:30 muestran "No disponible" y los desde 14:00 muestran "Disponible" u "Ocupado" según los datos — level: component — covers: Turnos que ya pasaron
- [x] T3 Un turno que ya pasó y estaba marcado como ocupado muestra "No disponible" — level: component — covers: Turnos que ya pasaron
- [x] T4 A las 14:00 exactas, el turno de las 14:00 muestra "No disponible" — level: component — covers: Turno que empieza justo ahora
- [x] T5 Sin hora de entrada, el portal usa la hora de Buenos Aires: con el reloj en 16:00 UTC (13:00 en el club) los turnos hasta las 12:30 muestran "No disponible" — level: component — covers: Turnos que ya pasaron

## Manual verification

- [x] M1 Abriendo el portal durante el día, los turnos anteriores a la hora actual de Buenos Aires se ven "No disponible" y el resto "Disponible" u "Ocupado" — covers: Turnos que ya pasaron

## Modified tests

- `con datos que marcan turnos ocupados, esos turnos muestran "Ocupado" y el resto "Disponible"` (change `ver-disponibilidad-canchas`, T3): hoy usa el reloj real, así que a partir de las 8:00 algunos turnos pasarían a "No disponible" y fallaría. Solo se le fija la hora anterior al primer turno; el valor esperado no cambia (exacto: "Disponible" y "Ocupado"). Con esa hora "No disponible" no puede aparecer. Cubre el escenario "Distinguir turnos disponibles y ocupados". Es el único test previo afectado; los otros dos no dependen del estado de los turnos.

## Decisions

- T2: la hora de entrada es un texto "H:MM" en hora del club (mismo formato que los turnos), no una fecha; así los tests no dependen de la zona horaria. Sin hora de entrada se usa el reloj real en America/Argentina/Buenos_Aires (T5).
- T3: el test pasó sin código nuevo (T2 ya daba prioridad a "No disponible"). Se comprobó que no es vacuo invirtiendo la prioridad a mano: falla con "Ocupado"; el código quedó restaurado.
- T4: el test pasó sin código nuevo (T2 ya usaba "igual o anterior"). Se comprobó que fija el límite cambiando a mano `<=` por `<`: falla con "Disponible"; el código quedó restaurado.
- T5: el test viejo de turnos ocupados (listado en Modified tests) se modificó solo agregando la hora 7:00; los valores esperados no cambiaron. Los otros dos tests de `App` siguen sin tocar. La hora por defecto se calcula al renderizar y no se actualiza sola mientras la página queda abierta (no está en las historias; si importa, es una historia nueva).
- C3: el refactor se limitó a los tests nuevos (T2 a T5). El test previo de turnos ocupados quedó como estaba, porque tocarlo más allá de la hora fija sería un cambio de test no aprobado. Tests en verde antes y después (7/7); T4 sigue fallando si se cambia `<=` por `<`.

## Close

- [x] C1 Manual checks walked through with the user
- [x] C2 Assumptions tested with the user: confirmed, or corrections added to the backlog as new stories — A1 confirmed in the demo (8:42: the 8:00 turn in progress shows "No disponible"); none rejected
- [x] C3 Refactor pass done: los tests nuevos (T2 a T5) comparten dos funciones auxiliares para leer la grilla; el test previo modificado no se tocó
- [x] C4 Definition of Done level from story.md met
- [x] C5 Project-wide decisions captured (ADR / project context) or none: none new (zona horaria already captured in ADR 001)
- [x] C6 Commit messages proposed (functionality and refactor separate)
