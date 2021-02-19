<template>
  <Default 
    :title="doc.title" 
    backLink="/blog"
    :date="doc.updatedAt.toString()"
  >
  <v-row align="center" justify="center">
    <v-col cols="10" class="ma-2">
      <nuxt-content :document="doc" />
    </v-col>
  </v-row>
  </Default>
</template>


<script>
export default {
  head() {
    return {
      title: `${this.doc.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.doc.description}` }
      ]
    }
  },
  async asyncData({$content, params}) {
    const doc = await $content(`articles/${params.slug}`).fetch();
    return { doc }
  }
}
</script>