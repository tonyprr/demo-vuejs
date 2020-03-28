// actions.spec.js

import { agregarOrden } from '@/store/actions'

test('Saving orden', () => {
  const orden = {
    cliente: 'Antonio',
    id: '0001',
    items: []
  }

  const commit = jest.fn()
  agregarOrden({ commit }, orden)

  expect(commit).toHaveBeenCalledWith('guardarOrden', orden)
})
