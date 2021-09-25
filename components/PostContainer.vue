<template>

    <div justify="space-between" align="center" class="ma-2">
        <v-hover v-slot="{hover}">
          <v-card :width="width" :height="height" :elevation="hover ? 12 : 2" class="transition-swing">
            <nuxt-link class="post-container" :to="`/articles/${slug}`">
              <v-img :src="img" height="300" max-width="600" class="align-end">
              </v-img>
              <v-card-title class="font-weight-bold">{{title}}</v-card-title>
              <v-card-subtitle align="left">{{desc}}</v-card-subtitle>
            </nuxt-link>
          </v-card>

        </v-hover>
    </div>
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
  computed: {
    width () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 300
        case 'sm': return 350
        case 'md': return 400
        case 'lg': return 400
        case 'xl': return 400
      }
    },
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 470
        case 'sm': return 450
        case 'md': return 400
        case 'lg': return 400
        case 'xl': return 400
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post-container {
  color: unset;
  text-decoration: unset;


}
</style>