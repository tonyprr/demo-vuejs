import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'
import Pedidos from '@/components/Pedidos.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Actions.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      agregarOrden: jest.fn(),
      listarOrdenes: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })
  it('dispatches "actionInput" when input event value is "input"', () => {
    const wrapper = shallowMount(Pedidos, { store, localVue })
    const input = wrapper.find('input')
    input.element.value = 'Antonio'
    wrapper.find('button').trigger('click')
    expect(actions.listarOrdenes).toHaveBeenCalled()
    expect(actions.agregarOrden).toHaveBeenCalled()
  })
})
