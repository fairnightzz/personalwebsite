<template>

    <v-cols justify="space-between" align="center" class="ma-2">
        <v-hover v-slot="{hover}">
          <v-card width="500" height="400" :elevation="hover ? 12 : 2" class="transition-swing">
            <nuxt-link class="post-container" :to="`/articles/${slug}`">
              <v-img :src="img" eager height="300" max-width="500" class="white--text align-end">
                <v-card-title class="font-weight-bold">{{title}}</v-card-title>
              </v-img>
              <v-card-text>{{desc}}</v-card-text>
            </nuxt-link>
          </v-card>

        </v-hover>
    </v-cols>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    },
    desc: {
      type: String,
      default: "Description"
    },
    img: {
      type: String,
      default: "Image"
    },
    slug: {
      type: String,
      default: "/"
    }
  },
}
</script>

<style lang="scss" scoped>
.post-container {
  color: unset;
  text-decoration: unset;


}
</style>