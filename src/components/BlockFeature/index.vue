<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h1>{{ feature.title }}</h1>
        <p>{{ feature.description }}</p>
        <a href="#">See our works</a>
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
