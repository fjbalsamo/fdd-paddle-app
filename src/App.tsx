import { DB } from './DB.mock'

const APERTURA = 8 * 60
const CIERRE = 23 * 60
const DURACION_TURNO = 90

const horarios: string[] = []
for (let inicio = APERTURA; inicio + DURACION_TURNO <= CIERRE; inicio += DURACION_TURNO) {
  horarios.push(`${Math.floor(inicio / 60)}:${String(inicio % 60).padStart(2, '0')}`)
}

type Cancha = (typeof DB.canchas)[number]

const aMinutos = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

const horaDelClub = () =>
  new Intl.DateTimeFormat('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    hour: 'numeric',
    minute: '2-digit',
    hourCycle: 'h23',
  }).format(new Date())

function estadoDelTurno(cancha: Cancha, hora: string, ahora: string) {
  if (aMinutos(hora) <= aMinutos(ahora)) return 'No disponible'
  return cancha.ocupados.includes(hora) ? 'Ocupado' : 'Disponible'
}

function App({ canchas = DB.canchas, hora: ahora = horaDelClub() }: { canchas?: Cancha[]; hora?: string }) {
  return (
    <main>
      {canchas.map((cancha) => (
        <section key={cancha.id} aria-labelledby={`cancha-${cancha.id}`}>
          <h2 id={`cancha-${cancha.id}`}>{cancha.nombre}</h2>
          <ul>
            {horarios.map((hora) => (
              <li key={hora}>
                <span>{hora}</span>{' '}
                <span>{estadoDelTurno(cancha, hora, ahora)}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
}

export default App
