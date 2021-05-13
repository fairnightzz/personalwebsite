<template>
  <div>
      <v-btn rounded nuxt :to="backLink">
        &lt; Back
      </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    backLink: {
      type: String,
      required: false,
    },
  },
}
</script>