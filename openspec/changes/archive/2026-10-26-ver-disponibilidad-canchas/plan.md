# Plan

- Datos: un objeto `DB` en `DB.mock.ts` (pedido del usuario, editable a mano) con las 3 canchas y, por cancha, los horarios de inicio de los turnos ocupados de hoy. Valores iniciales: Cancha 1 → 18:30 y 20:00; Cancha 2 → 9:30, 18:30, 20:00 y 21:30; Cancha 3 → 20:00. La forma (cancha → turnos ocupados) sirve de borrador del contrato con el futuro backend.
- Grilla: los 10 turnos del día se calculan desde 8:00 sumando 90 minutos hasta cubrir 23:00; el estado de cada uno sale de cruzarlo con los ocupados de su cancha.
- UI: la app reemplaza la pantalla de bienvenida de Vite por una sola vista mobile-first, con una sección por cancha que lista sus turnos con hora y estado "Libre" / "Ocupado".
- Sin API ni capa de servicios: la vista lee los datos directamente, porque no hay backend todavía.
- Testing: se agregan Vitest + Testing Library (no están instalados) como parte de esta primera historia, con tests a nivel componente que cubren los dos escenarios.

## Decisions needing an ADR

None
