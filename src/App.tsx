import { DB } from './DB.mock'

const APERTURA = 8 * 60
const CIERRE = 23 * 60
const DURACION_TURNO = 90

const horarios: string[] = []
for (let inicio = APERTURA; inicio + DURACION_TURNO <= CIERRE; inicio += DURACION_TURNO) {
  horarios.push(`${Math.floor(inicio / 60)}:${String(inicio % 60).padStart(2, '0')}`)
}

type Cancha = (typeof DB.canchas)[number]

function App({ canchas = DB.canchas }: { canchas?: Cancha[] }) {
  return (
    <main>
      {canchas.map((cancha) => (
        <section key={cancha.id} aria-labelledby={`cancha-${cancha.id}`}>
          <h2 id={`cancha-${cancha.id}`}>{cancha.nombre}</h2>
          <ul>
            {horarios.map((hora) => (
              <li key={hora}>
                <span>{hora}</span>{' '}
                <span>{cancha.ocupados.includes(hora) ? 'Ocupado' : 'Libre'}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
}

export default App
