<template>
  <div class="row">
    <service class="col-4" v-for="service in services" :key="service.title" :service="service" />
  </div>
</template>

<script>
import Service from './Service'

export default {
  components: {
    Service,
  },
  props: {
    services: Array,
  },
}
</script>
