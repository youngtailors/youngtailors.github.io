<template>
  <div class="container">
    <block-title headline="Our Services" title="Professional software development that translates your ideas to a working product." />
    <services />
  </div>
</template>

<script>
import BlockTitle from '../Common/BlockTitle'
import Services from './Services'

export default {
  components: {
    BlockTitle,
    Services,
  },
}
</script>
