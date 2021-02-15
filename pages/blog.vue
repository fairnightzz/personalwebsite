<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card data-aos="fade-up">
        <v-card-title class="headline">
          Welcome to my fake blog
        </v-card-title>
        <v-card-text>
          <p>My blog will take some time to make lmoa
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn>
          Comment or something
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
