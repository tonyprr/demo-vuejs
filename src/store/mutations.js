// mutations.js
export const guardarOrden = (state, orden) => {
  state.ordenes.push(orden)
}

export const setState = (state, payload) => {
  state[payload.state] = payload.value
}
