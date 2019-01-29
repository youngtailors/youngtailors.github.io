<template>
  <div class="row">
    <partner class="col" v-for="partner in partners" :key="partner.title" :partner="partner" />
  </div>
</template>

<script>
import Partner from './Partner'

export default {
  components: {
    Partner,
  },
  props: {
    partners: Array,
  },
}
</script>
