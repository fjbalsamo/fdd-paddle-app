## MODIFIED Requirements

### Requirement: Estado de cada turno
El portal SHALL indicar en cada turno si está "Disponible", "Ocupado" o "No disponible". Los turnos que ya pasaron SHALL verse como "No disponible"; el resto SHALL verse como "Disponible" u "Ocupado" según los datos de ocupación del día. La hora actual se toma en la zona horaria del club.

#### Scenario: Distinguir turnos disponibles y ocupados
- **GIVEN** la hora actual en el club es anterior al primer turno del día
- **GIVEN** los datos del día marcan algunos turnos como ocupados
- **WHEN** el socio abre el portal
- **THEN** esos turnos se ven como "Ocupado"
- **THEN** el resto de los turnos se ven como "Disponible"

#### Scenario: Turnos que ya pasaron
- **GIVEN** la hora actual en el club son las 13:00
- **WHEN** el socio abre el portal
- **THEN** en cada cancha los turnos de las 8:00, 9:30, 11:00 y 12:30 se ven como "No disponible"
- **THEN** los turnos desde las 14:00 se ven como "Disponible" u "Ocupado" según los datos del día

#### Scenario: Turno que empieza justo ahora
- **GIVEN** la hora actual en el club son las 14:00
- **WHEN** el socio abre el portal
- **THEN** en cada cancha el turno de las 14:00 se ve como "No disponible"
