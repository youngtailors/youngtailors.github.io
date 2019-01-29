<template>
  <div class="block-title">
    <h4 class="headline" v-if="headline">{{ headline }}</h4>
    <h3 class="title" v-if="title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    headline: String,
    title: String,
  },
}
</script>

<style lang="stylus">
.block-title
  margin-bottom 2rem
  .headline
    text-transform uppercase
    font-weight 400
</style>
