<template>
  <Default title="Blog">
    <!-- loop through each post -->
    <v-row align="center" justify="center">
        <PostContainer 
          v-for="p in posts" v-bind:key="p.slug"
          :title="p.title"
          :desc="p.description"
          :img="p.img"
          :slug="p.slug"
          class="flex-item"
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
        { hid: 'description', name: 'description', content: `Welcome to my blog! Here, I post just about anything that interests me.` }
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

.blogcontainer {
  display: flex;
  flex: column;
  justify-content: center;
  align-items: center;
}
</style>