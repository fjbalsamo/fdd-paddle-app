import { cleanup, render, screen, within } from '@testing-library/react'
import { afterEach, expect, test, vi } from 'vitest'
import App from './App'

afterEach(() => {
  cleanup()
  vi.useRealTimers()
})

test('al abrir el portal se ven las secciones Cancha 1, Cancha 2 y Cancha 3', () => {
  render(<App />)

  const canchas = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
  expect(canchas).toEqual(['Cancha 1', 'Cancha 2', 'Cancha 3'])
})

test('cada cancha lista exactamente 10 turnos, de 8:00 a 21:30 cada 90 minutos y en ese orden', () => {
  render(<App />)

  for (const nombre of ['Cancha 1', 'Cancha 2', 'Cancha 3']) {
    const cancha = screen.getByRole('region', { name: nombre })
    const horas = within(cancha)
      .getAllByRole('listitem')
      .map((turno) => within(turno).getByText(/^\d{1,2}:\d{2}$/).textContent)

    expect(horas).toEqual([
      '8:00', '9:30', '11:00', '12:30', '14:00',
      '15:30', '17:00', '18:30', '20:00', '21:30',
    ])
  }
})

test('con datos que marcan turnos ocupados, esos turnos muestran "Ocupado" y el resto "Disponible"', () => {
  render(<App hora="7:00" canchas={[{ id: 1, nombre: 'Cancha de prueba', ocupados: ['9:30', '20:00'] }]} />)

  const cancha = screen.getByRole('region', { name: 'Cancha de prueba' })
  const turnos = within(cancha)
    .getAllByRole('listitem')
    .map((turno) => [
      within(turno).getByText(/^\d{1,2}:\d{2}$/).textContent,
      within(turno).getByText(/^(Disponible|Ocupado)$/).textContent,
    ])

  expect(turnos).toEqual([
    ['8:00', 'Disponible'],
    ['9:30', 'Ocupado'],
    ['11:00', 'Disponible'],
    ['12:30', 'Disponible'],
    ['14:00', 'Disponible'],
    ['15:30', 'Disponible'],
    ['17:00', 'Disponible'],
    ['18:30', 'Disponible'],
    ['20:00', 'Ocupado'],
    ['21:30', 'Disponible'],
  ])
})

test('a las 13:00 los turnos de 8:00 a 12:30 muestran "No disponible" y los desde 14:00 según los datos', () => {
  render(<App hora="13:00" canchas={[{ id: 1, nombre: 'Cancha de prueba', ocupados: ['14:00', '20:00'] }]} />)

  const cancha = screen.getByRole('region', { name: 'Cancha de prueba' })
  const turnos = within(cancha)
    .getAllByRole('listitem')
    .map((turno) => [
      within(turno).getByText(/^\d{1,2}:\d{2}$/).textContent,
      within(turno).getByText(/^(Disponible|Ocupado|No disponible)$/).textContent,
    ])

  expect(turnos).toEqual([
    ['8:00', 'No disponible'],
    ['9:30', 'No disponible'],
    ['11:00', 'No disponible'],
    ['12:30', 'No disponible'],
    ['14:00', 'Ocupado'],
    ['15:30', 'Disponible'],
    ['17:00', 'Disponible'],
    ['18:30', 'Disponible'],
    ['20:00', 'Ocupado'],
    ['21:30', 'Disponible'],
  ])
})

test('un turno que ya pasó y estaba ocupado muestra "No disponible"', () => {
  render(<App hora="13:00" canchas={[{ id: 1, nombre: 'Cancha de prueba', ocupados: ['9:30'] }]} />)

  const cancha = screen.getByRole('region', { name: 'Cancha de prueba' })
  const turno = within(cancha)
    .getAllByRole('listitem')
    .find((item) => within(item).queryByText('9:30'))!

  expect(within(turno).getByText(/^(Disponible|Ocupado|No disponible)$/).textContent).toBe('No disponible')
})

test('a las 14:00 exactas el turno de las 14:00 muestra "No disponible"', () => {
  render(<App hora="14:00" canchas={[{ id: 1, nombre: 'Cancha de prueba', ocupados: [] }]} />)

  const cancha = screen.getByRole('region', { name: 'Cancha de prueba' })
  const turno = within(cancha)
    .getAllByRole('listitem')
    .find((item) => within(item).queryByText('14:00'))!

  expect(within(turno).getByText(/^(Disponible|Ocupado|No disponible)$/).textContent).toBe('No disponible')
})

test('sin hora de entrada usa la hora de Buenos Aires: con el reloj en 16:00 UTC los turnos hasta las 12:30 muestran "No disponible"', () => {
  vi.useFakeTimers({ toFake: ['Date'] })
  vi.setSystemTime(new Date('2026-11-18T16:00:00Z'))
  render(<App canchas={[{ id: 1, nombre: 'Cancha de prueba', ocupados: [] }]} />)

  const cancha = screen.getByRole('region', { name: 'Cancha de prueba' })
  const turnos = within(cancha)
    .getAllByRole('listitem')
    .map((turno) => [
      within(turno).getByText(/^\d{1,2}:\d{2}$/).textContent,
      within(turno).getByText(/^(Disponible|Ocupado|No disponible)$/).textContent,
    ])

  expect(turnos).toEqual([
    ['8:00', 'No disponible'],
    ['9:30', 'No disponible'],
    ['11:00', 'No disponible'],
    ['12:30', 'No disponible'],
    ['14:00', 'Disponible'],
    ['15:30', 'Disponible'],
    ['17:00', 'Disponible'],
    ['18:30', 'Disponible'],
    ['20:00', 'Disponible'],
    ['21:30', 'Disponible'],
  ])
})
