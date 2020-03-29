// controller-firebase.js

export const listPedidosPendientes = (db, callback) => {
  db.collection('Pedidos')
    .where('check', '==', false).orderBy('fecha')
    .get()
    .then((querySnapshot) => {
      const pedidos = []
      querySnapshot.forEach((doc) => {
        const eventoData = {
          id: doc.id,
          check: doc.data().check,
          cliente: doc.data().cliente,
          itemsPedido: doc.data().pedido
        }
        pedidos.push(eventoData)
      })
      callback(pedidos)
    })
}
