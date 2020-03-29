import { listPedidosPendientes } from '@/controller/controller-firebase.js'
import MockFirebase from 'mock-cloud-firestore'

const fixtureData = {
  __collection__: {
    Pedidos: {
      __doc__: {
        1000001: {
          check: false,
          cliente: 'Antonio'
        }
      }
    }
  }
}

window.firebase = new MockFirebase(fixtureData)

const db = window.firebase.firestore()

describe('Operacioines API DB', () => {
  it('Listar pedidos pendientes', (done) => {
    return listPedidosPendientes(db, (data) => {
      expect(data.length).toBeGreaterThanOrEqual(1)
      done()
    })
  })
})
