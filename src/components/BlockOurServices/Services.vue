<template>
  <div class="row">
    <service class="col-4" v-for="service in services" :key="service.key" :service="service" />
  </div>
</template>

<script>
import Service from './Service'

export default {
  components: {
    Service,
  },
  data() {
    return {
      services: [{
        key: 'product',
        iconUrl: '~/assets/product.png',
        title: 'Product Development',
        description: 'Product description',
      }, {
        key: 'web',
        iconUrl: '~/assets/web.png',
        title: 'Web Development',
        description: 'Web description',
      }, {
        key: 'mobile',
        iconUrl: '~/assets/mobile.png',
        title: 'Mobile Development',
        description: 'Mobile description',
      }]
    }
  },
}
</script>
