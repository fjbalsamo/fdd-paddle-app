# Plan

- Los datos de ocupación y la regla que decide el estado de cada turno no cambian; solo cambia cómo se presenta cada turno.
- Incorporar al portal la librería de UI del ADR 002; esta es la primera historia que la usa.
- Presentar cada turno con un aspecto visual propio según su estado, sin quitar el texto del estado.
- Conservar el texto y la estructura visibles actuales de cada turno, para que los tests existentes sigan valiendo sin modificarse.
- No se agregan hooks solo para tests; la distinción visual entre estados se verifica con un chequeo manual.

## Decisions needing an ADR

None (la librería de UI ya está cubierta por el ADR 002).
