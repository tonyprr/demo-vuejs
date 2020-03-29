// mutations.js
export const guardarOrden = (state, orden) => {
  console.log(orden)
  state.ordenes.push(orden)
  console.log(state.ordenes)
}

export const setState = (state, payload) => {
  state[payload.state] = payload.value
}
