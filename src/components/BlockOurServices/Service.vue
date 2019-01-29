<template>
  <div class="service">
    <div class="icon" v-if="service.img">
      <g-image :src="service.img" />
    </div>
    <h3 class="title" v-if="service.title">
      {{ service.title }}
    </h3>
    <p v-if="service.description">
      {{ service.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      img: String,
      title: String,
      description: String,
    },
  },
}
</script>

<style lang="stylus">
.service
  .icon
    margin-bottom 1rem
  .title
    margin-bottom 1rem
</style>
