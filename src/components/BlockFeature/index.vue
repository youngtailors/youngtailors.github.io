<template>
  <div id="block-feature" class="container">
    <div class="row">
      <div class="col-6 first-column">
        <h1>{{ feature.title }}</h1>
        <p>{{ feature.description }}</p>
        <a class="btn btn-outline-primary btn-see" href="#">See our works</a>
      </div>
      <div class="col-6">
        <g-image src="~/assets/feature.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feature: Object,
  },
}
</script>

<style lang="stylus">
#block-feature
  margin-bottom 2rem
  .first-column
    padding-top 5rem
    .btn-see
      align-self flex-start
</style>
