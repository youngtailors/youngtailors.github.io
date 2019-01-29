<template>
  <div class="partner">
    <h3>{{ partner.field }}</h3>
    <div class="info">
      <div class="logo" v-if="partner.logo">
        <g-image :src="partner.logo" />
      </div>
      <div>
        <h3 v-if="partner.title">
          {{ partner.title }}
        </h3>
        <p v-if="partner.description">
          {{ partner.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    partner: {
      field: String,
      logo: String,
      title: String,
      description: String,
    },
  },
}
</script>

<style lang="stylus">
.partner
  .info
    display flex
    flex-direction row
    align-items center
    .logo
      margin-right 1rem
    p
      margin 0
</style>
