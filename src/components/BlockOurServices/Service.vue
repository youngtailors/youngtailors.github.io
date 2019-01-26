<template>
  <div>
    <div v-if="service.iconUrl">
      <g-image :src="service.iconUrl" />
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
      iconUrl: String,
      title: String,
      description: String,
    },
  },
}
</script>
