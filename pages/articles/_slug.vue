<template>
  <Default 
    :title="doc.title" 
    backLink="/blog"
    :date="doc.date"
    :imageLink="doc.img"
    :readingTime="doc.readingTime"
    :description="doc.description"
  >
  <v-row align="center" justify="center">
    <v-col xl="4" lg="6" md="6" sm="10" class="ma-2">
      <nuxt-content :document="doc" />
    </v-col>
  </v-row>
  </Default>
</template>


<script>
export default {
  data: () => {
    return {
      readTime: 0
    }
  },
 
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

<style>

.nuxt-content {
  font-size: 14pt;
}
.nuxt-content img {
    max-width: 100%;
    max-height:100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>