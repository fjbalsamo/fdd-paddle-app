import BlockIcon from '@mui/icons-material/Block'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Chip from '@mui/material/Chip'
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

const aspectoDelEstado = {
  Disponible: { color: 'success', variant: 'filled', icon: <CheckCircleIcon /> },
  Ocupado: { color: 'error', variant: 'filled', icon: <CancelIcon /> },
  'No disponible': {
    color: 'default',
    variant: 'outlined',
    icon: <BlockIcon />,
    sx: { color: 'inherit', borderColor: 'currentColor', '& .MuiChip-icon': { color: 'inherit' } },
  },
} as const

function EstadoDelTurno({ estado }: { estado: keyof typeof aspectoDelEstado }) {
  return <Chip label={estado} size="small" {...aspectoDelEstado[estado]} />
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
                <EstadoDelTurno estado={estadoDelTurno(cancha, hora, ahora)} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
}

export default App
