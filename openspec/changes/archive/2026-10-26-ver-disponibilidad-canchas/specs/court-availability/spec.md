# Spec Delta

## Purpose
Permitir que un socio vea, para el día de hoy, los turnos de cada cancha del club y si están libres u ocupados.

## ADDED Requirements

### Requirement: Grilla de turnos del día
El portal SHALL mostrar las 3 canchas del club (Cancha 1, Cancha 2 y Cancha 3), cada una con sus turnos de 90 minutos de hoy, entre las 8:00 y las 23:00.

#### Scenario: Ver turnos del día
- **WHEN** el socio abre el portal
- **THEN** ve Cancha 1, Cancha 2 y Cancha 3
- **THEN** cada cancha lista 10 turnos que empiezan a las 8:00, 9:30, 11:00, 12:30, 14:00, 15:30, 17:00, 18:30, 20:00 y 21:30 (el último termina a las 23:00)

### Requirement: Estado de cada turno
El portal SHALL indicar en cada turno si está "Libre" u "Ocupado", según los datos de ocupación del día.

#### Scenario: Distinguir turnos libres y ocupados
- **GIVEN** los datos del día marcan algunos turnos como ocupados
- **WHEN** el socio abre el portal
- **THEN** esos turnos se ven como "Ocupado"
- **THEN** el resto de los turnos se ven como "Libre"
