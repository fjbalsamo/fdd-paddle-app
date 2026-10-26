import { cleanup, render, screen, within } from '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import App from './App'

afterEach(cleanup)

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

test('con datos que marcan turnos ocupados, esos turnos muestran "Ocupado" y el resto "Libre"', () => {
  render(<App canchas={[{ id: 1, nombre: 'Cancha de prueba', ocupados: ['9:30', '20:00'] }]} />)

  const cancha = screen.getByRole('region', { name: 'Cancha de prueba' })
  const turnos = within(cancha)
    .getAllByRole('listitem')
    .map((turno) => [
      within(turno).getByText(/^\d{1,2}:\d{2}$/).textContent,
      within(turno).getByText(/^(Libre|Ocupado)$/).textContent,
    ])

  expect(turnos).toEqual([
    ['8:00', 'Libre'],
    ['9:30', 'Ocupado'],
    ['11:00', 'Libre'],
    ['12:30', 'Libre'],
    ['14:00', 'Libre'],
    ['15:30', 'Libre'],
    ['17:00', 'Libre'],
    ['18:30', 'Libre'],
    ['20:00', 'Ocupado'],
    ['21:30', 'Libre'],
  ])
})
