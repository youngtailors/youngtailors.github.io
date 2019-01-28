<template>
  <div>
    <div v-if="service.img">
      <g-image :src="service.img" />
    </div>
    <h3 v-if="service.title">
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
