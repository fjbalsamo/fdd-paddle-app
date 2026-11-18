# Tests

## Automated

- [x] T1 con turnos pasados, ocupados y libres en la misma cancha, cada turno muestra el texto de su estado ("No disponible", "Ocupado" o "Disponible") — level: component — covers: Estados distinguibles a simple vista

Los escenarios restantes de "Estado de cada turno" ya tienen tests de cambios anteriores, que deben seguir en verde sin modificarse.

## Manual verification

- [x] M1 en el celular, los turnos disponibles, ocupados y no disponibles se distinguen de un vistazo, sin leer el texto — covers: Estados distinguibles a simple vista
- [x] M2 mirando la pantalla sin depender del color (por ejemplo en escala de grises), los tres estados siguen distinguiéndose — covers: Estados distinguibles a simple vista

## Modified tests

None

## Decisions

- T1 nació en verde: el texto de cada estado ya existía (FDD-001, FDD-005), así que el test es una guarda contra regresiones del cambio de presentación y no pudo mostrarse en rojo. La distinción visual la cubren M1 y M2.
- M1 falló dos veces: "No disponible" se leía mal porque MUI usa su tema claro (texto casi negro, relleno negro translúcido) sobre el fondo oscuro de la app. El 1.er intento (gris con borde) y el 2.º (relleno gris claro, que no se veía por ser translúcido) no lo resolvieron. Tras consultar al arquitecto se eligió la opción A: "No disponible" hereda el color de texto de la app (chip con borde). El tema de MUI según modo claro/oscuro se anotó en FDD-008. El rediseño de la grilla queda fuera de este slice.
- M2 falló: en escala de grises "Disponible" y "Ocupado" (verde y rojo rellenos) se veían iguales. Por decisión del usuario se sumó un ícono distinto por estado (check, cruz, prohibido) con la librería de íconos de MUI, misma librería del ADR 002, sin ADR nuevo.

## Close

- [x] C1 Manual checks walked through with the user
- [x] C2 Assumptions tested with the user: confirmed, or corrections added to the backlog as new stories — A1 confirmed; none rejected
- [x] C3 Refactor pass done or "not needed" with reason: not needed: el código nuevo es mínimo y sin duplicación; no existe ningún ayudante previo para reutilizar (el ayudante de T1 es el único) y la repetición de los tests anteriores queda fuera de este change
- [x] C4 Definition of Done level from story.md met
- [x] C5 Project-wide decisions captured (ADR / project context) or none — ADR 002 enmendado (tests sin envoltorio, íconos); tema claro/oscuro anotado en FDD-008
- [x] C6 Commit messages proposed (functionality and refactor separate)
