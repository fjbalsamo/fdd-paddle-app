// Datos de ejemplo en memoria (sin backend todavía).
// Para cambiar la ocupación del día, editá la lista `ocupados` de cada cancha
// con el horario de inicio del turno ("HH:MM").
export const DB = {
  canchas: [
    { id: 1, nombre: 'Cancha 1', ocupados: ['18:30', '20:00'] },
    { id: 2, nombre: 'Cancha 2', ocupados: ['9:30', '18:30', '20:00', '21:30'] },
    { id: 3, nombre: 'Cancha 3', ocupados: ['20:00'] },
  ],
}
