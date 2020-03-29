<template>
  <div  class="hello">
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
export default {
  name: 'Cocina',
  props: {
    msg: String
  },
  created () {
    this.$store.dispatch('listarOrdenes')
  }
}

</script>
