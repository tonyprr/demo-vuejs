
export const agregarOrden = (context, orden) => {
  orden.items = []
  context.commit('guardarOrden', orden)
}
