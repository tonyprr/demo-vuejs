
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
// import { storeModule } from '@path/to/store/modules';
// import { mutations } from '../../src/store/index.js'

// const mutations = storeModule.mutations;
const localVue = createLocalVue()
localVue.use(Vuex)

const mutations = {
  guardarOrden: jest.fn()
}
// mock state values
const state = {
  ordenes: [],
  ingresoTotal: 0
}

const store = new Vuex.Store({ state, mutations })

describe('mutations', () => {
  it('Guardar Orden #1', () => {
    const orden = {
      cliente: 'Antonio',
      id: '0001',
      items: []
    }

    store.commit('guardarOrden', orden)
    expect(mutations.guardarOrden).toHaveBeenCalledWith(
      state,
      orden
    )
  })
})
