# Tests

## Automated

- [x] T1 Al abrir el portal se ven las secciones Cancha 1, Cancha 2 y Cancha 3 — level: component — covers: Ver turnos del día
- [x] T2 Cada cancha lista exactamente 10 turnos, de 8:00 a 21:30 cada 90 minutos y en ese orden — level: component — covers: Ver turnos del día
- [x] T3 Con datos que marcan turnos ocupados, esos turnos muestran "Ocupado" y el resto "Libre" (datos de prueba propios del test, no los de `DB.mock.ts`, para que editar el mock no rompa los tests) — level: component — covers: Distinguir turnos libres y ocupados

## Manual verification

- [x] M1 En el celular (o vista móvil del navegador) la grilla se lee bien: una sección por cancha, sin scroll horizontal — covers: Ver turnos del día
- [x] M3 Editar `ocupados` en `DB.mock.ts` cambia lo que muestra la pantalla al recargar — covers: Distinguir turnos libres y ocupados

## Close

- [x] C1 Manual checks walked through with the user
- [x] C2 Assumptions tested with the user: confirmed, or corrections added to the backlog as new stories
- [x] C3 Refactor pass done: removed unused Vite template files (App.css, src/assets/*, public/icons.svg)
- [x] C4 Definition of Done level from story.md met
- [x] C5 Project-wide decisions captured (ADR / project context) or none: none
- [x] C6 Commit messages proposed (functionality and refactor separate)
