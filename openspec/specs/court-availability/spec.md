# court-availability Specification

## Purpose
Permitir que un socio vea, para el día de hoy, los turnos de cada cancha del club y si están disponibles u ocupados.

## Requirements

### Requirement: Grilla de turnos del día
El portal SHALL mostrar las 3 canchas del club (Cancha 1, Cancha 2 y Cancha 3), cada una con sus turnos de 90 minutos de hoy, entre las 8:00 y las 23:00.

#### Scenario: Ver turnos del día
- **WHEN** el socio abre el portal
- **THEN** ve Cancha 1, Cancha 2 y Cancha 3
- **THEN** cada cancha lista 10 turnos que empiezan a las 8:00, 9:30, 11:00, 12:30, 14:00, 15:30, 17:00, 18:30, 20:00 y 21:30 (el último termina a las 23:00)

### Requirement: Estado de cada turno
El portal SHALL indicar en cada turno si está "Disponible", "Ocupado" o "No disponible". Los turnos que ya pasaron SHALL verse como "No disponible"; el resto SHALL verse como "Disponible" u "Ocupado" según los datos de ocupación del día. La hora actual se toma en la zona horaria del club. Cada estado SHALL tener un aspecto visual propio, distinto del de los otros dos, y SHALL conservar su texto.

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

#### Scenario: Estados distinguibles a simple vista
- **GIVEN** la hora actual en el club son las 13:00
- **GIVEN** los datos del día marcan algunos turnos posteriores como ocupados
- **WHEN** el socio abre el portal
- **THEN** los turnos "Disponible", "Ocupado" y "No disponible" tienen cada uno un aspecto visual distinto de los otros dos
- **THEN** cada turno conserva el texto de su estado
