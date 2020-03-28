// mutations.spec.js

import { guardarOrden } from '@/store/mutations'

test('Saving orden', () => {
  const state = {
    ordenes: [],
    ingresoTotal: 0
  }
  const orden = {
    cliente: 'Antonio',
    id: '0001',
    items: []
  }
  guardarOrden(state, orden)
  expect(state.ordenes.length).toBe(1)
})
