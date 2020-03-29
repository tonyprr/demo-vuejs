// actions.spec.js
import { agregarOrden, listarOrdenes } from '@/store/actions'
import { listPedidosPendientes } from '@/controller/controller-firebase'

test('Saving orden', () => {
  const commit = jest.fn()
  const orden = {
    cliente: 'Antonio',
    id: '0001',
    items: []
  }

  agregarOrden({ commit }, orden)

  expect(commit).toHaveBeenCalledWith('guardarOrden', orden)
})

jest.mock('@/controller/controller-firebase', () => ({
  listPedidosPendientes: jest.fn()
}))

describe('Acciones con llamadas a ApiDb', () => {
  it('Listar pedidos pendientes', async (done) => {
    const commit = jest.fn()
    const pedidos = [
      {
        id: '1000021',
        check: false,
        cliente: 'Antonio',
        itemsPedido: []
      }
    ]
    const payload = {
      state: 'dataPedido',
      value: pedidos
    }
    listPedidosPendientes.mockImplementation((db, callback) => { callback(pedidos) })
    await listarOrdenes({ commit })
    done()
    expect(commit).toHaveBeenCalledWith('setState', payload)
  }, 20000)
})
