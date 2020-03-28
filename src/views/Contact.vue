<template>
  <div class="contact">
    <img alt="Vue logo" src="../assets/logo.png">
    <FormContact title="Contáctanos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormContact from '@/components/FormContact.vue'

export default {
  name: 'Contact Page',
  components: {
    FormContact
  }
}
</script>
