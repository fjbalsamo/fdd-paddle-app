# 002 - MUI para la UI

## Context
El portal se usa desde el celular y las próximas historias (distinguir estados de turnos, reservar, cancelar) necesitan componentes de UI consistentes. Hoy no hay una librería de componentes adoptada; elegirla es caro de revertir porque toda la UI quedaría acoplada a ella.

## Decision
Se usa MUI como librería de componentes de la UI del portal.

## Consequences
- Los componentes nuevos se construyen sobre MUI; migrar a otra librería implicaría reescribir la UI.
- Se agrega una dependencia (y su motor de estilos) al bundle.
- Los tests de componentes renderizan los componentes de MUI sin envoltorio; si se adopta un tema (ver FDD-008), los tests deberán renderizar con él.
- Se usa también `@mui/icons-material`, de la misma librería.
