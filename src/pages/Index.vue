<template>
  <Layout>
    <block-feature />
    <block-our-services />
  </Layout>
</template>

<script>
import BlockFeature from '~/components/BlockFeature'
import BlockOurServices from '~/components/BlockOurServices'
export default {
  components: {
    BlockFeature,
    BlockOurServices,
  },
}
</script>
