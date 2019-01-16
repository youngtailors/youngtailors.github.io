<template>
  <header id="header">
    <navigation-bar />
  </header>
</template>

<script>
import NavigationBar from '~/components/NavigationBar'

export default {
  components: {
    NavigationBar,
  },
}
</script>

<style lang="stylus">
#header
  background-color #0E1F36
</style>
