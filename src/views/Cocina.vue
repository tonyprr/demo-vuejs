<template>
  <div class="cocina">
    <img alt="Vue logo" src="../assets/logo.png">
    <Pedidos />
  </div>
</template>

<script>
// @ is an alias to /src
import Pedidos from '@/components/Pedidos.vue'

export default {
  name: 'Cocina',
  components: {
    Pedidos
  }
}
</script>
