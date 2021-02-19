<template>
  <Default title="Blog">
    <!-- loop through each post -->
    <v-row align="center" justify="center">

    <PostContainer 
      v-for="p in posts" v-bind:key="p.slug"
      :title="p.title"
      :desc="p.description"
      :slug="p.slug"
    ></PostContainer>
    </v-row>
  </Default>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  head() {
    return {
      title: `Blog`,
      meta: [
        { hid: 'description', name: 'description', content: `This is Zhehai's blog.` }
      ]
    }
  },
  async fetch() {
    this.posts = await this.$content('articles').fetch()
  }
}
</script>

<style lang="scss" scoped>
.post-container + .post-container {
  margin-top: 0.5em;
}
</style>