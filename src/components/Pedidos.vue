<template>
  <div  class="hello">
    <section>
      <input type="text" v-model="newOrden.cliente"/>
      <button @click="agregarOrden(newOrden)">agregar</button>
    </section>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Cliente</th>
          <th scope="col">Orden</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody v-for="(el, index) in $store.state.dataPedido" :key="el.id">
        <tr>
          <th scope="row">{{el.cliente}}</th>
          <td>{{index+1}}</td>
          <th >{{el.check}}</th>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Cocina',
  props: {
    msg: String
  },
  data: function () {
    return {
      newOrden: { cliente: '' }
    }
  },
  methods: {
    ...mapActions(['agregarOrden'])
  },
  created () {
    this.$store.dispatch('listarOrdenes')
  }
}

</script>
