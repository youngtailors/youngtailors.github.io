<template>
  <div>
    <h2 v-if="headline">{{ headline }}</h2>
    <h3 v-if="title">{{ title }}</h3>
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
