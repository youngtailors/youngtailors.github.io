<template>
  <Layout>
    <block-feature :feature="$page.content.feature" />
    <block-our-services :services="$page.content.ourServices" />
  </Layout>
</template>

<page-query>
query Content {
  content (path: "/src/pages") {
    ourServices {
      title
      description
      img (width: 70)
    }
    feature {
      title
      description
    }
  }
}
</page-query>

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
