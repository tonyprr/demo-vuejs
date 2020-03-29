import * as apiDb from '@/controller/controller-firebase'
import { db } from '../db'

export const agregarOrden = (context, orden) => {
  orden.items = []
  context.commit('guardarOrden', orden)
}

export const listarOrdenes = (context) => {
  apiDb.listPedidosPendientes(db, (pedidos) => {
    console.log(pedidos)
    context.commit('setState', {
      state: 'dataPedido',
      value: pedidos
    })
  })
}
