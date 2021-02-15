<template>
  <v-app>
    <v-main>
      <v-app-bar fixed app dense>
      <v-tabs
        right
      >
      <v-tab nuxt to="/">Home</v-tab>
      <v-tab nuxt to="/blog">Blog</v-tab>
      <v-tab>Resume</v-tab>
      </v-tabs>
      </v-app-bar>
        <nuxt />

      <v-container class="pa-12"></v-container>
      <v-container class="pa-12"></v-container>
      <v-container class="pa-12"></v-container>
      <v-footer padless absolute>
        <v-card
      flat
      tile
      width="100%"
      class="black lighten-1 white--text text-center pt-4"
    >
      <v-row align="center" justify="center">
        <v-card-title>Contact me at:</v-card-title>
      </v-row>
      <v-card-text>
        <v-btn
          v-for="(icon,index) in icons"
          :key="index"
          class="mx-4 white--text"
          icon
          :href="icon.link"
          target="blank"
        >
          <v-icon size="24px">
            {{ icon.type }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Made with &#128151 
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Zhehai Zhang</strong>
      </v-card-text>
    </v-card>

      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      icons: [
        {type: 'mdi-facebook', link: 'https://www.facebook.com/zhehai.zhang/'},
        {type: 'mdi-linkedin', link: 'https://www.linkedin.com/in/mark-zhehai-zhang-8a6570168/'},
        {type: 'mdi-instagram', link: 'https://www.instagram.com/zhehai_zhang/'},
        {type: 'mdi-github', link: 'https://github.com/fairnightzz'},
      ],
    }
  }
}
</script>

<style scoped>
  
</style>
