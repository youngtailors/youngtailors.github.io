<template>
  <div id="block-our-services" class="container">
    <div class="row">
      <div class="col-6">
        <block-title headline="Our Services" title="Professional software development that translates your ideas to a working product." />
      </div>
    </div>
    <services :services="services" />
    <h3 class="partnership-title text-center">{{ partnerships.title }}</h3>
    <partners :partners="partnerships.partners" />
  </div>
</template>

<script>
import BlockTitle from '../Common/BlockTitle'
import Services from './Services'
import Partners from './Partners'

export default {
  components: {
    BlockTitle,
    Services,
    Partners,
  },
  props: {
    services: Array,
    partnerships: {
      title: String,
      partners: Array,
    },
  },
}
</script>

<style lang="stylus">
#block-our-services
  margin-bottom 2rem
  .partnership-title
    margin-top 1rem
    margin-bottom 1rem
</style>
