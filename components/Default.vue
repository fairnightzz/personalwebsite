<template>
  <!-- 
    Note: This is not a typical Nuxt template
    It is just a custom vue component with a slot (https://vuejs.org/v2/guide/components-slots.html)
    I prefer components with slots over Nuxt's layouts becaise custom components are more versatile"
      - they support passing of props
      - they can be chained (you can make nested layouts)
    Check out his answer: https://stackoverflow.com/a/62035321/8677167
  -->
  <div>
    <main>
      <!-- only posts have the back button -->
      <v-row align="center" justify="center">
          <v-col cols="10" class="ma-2">
            <BackButton v-if="backLink" :backLink="backLink" class="my-2" />

            <!-- page does not have to have a title -->
            <v-row align="center" justify="center">
            <h1 class="display-2 font-weight-bold text-center mt-6" v-if="title">{{ title }}</h1>
            <v-btn icon target="_blank" href="http://zhehaizhang.com/feed/articles/rss.xml">
                <v-icon>mdi-rss</v-icon>
            </v-btn>
            </v-row>
            <!-- not all pages have dates, only posts do -->
            <div v-if="date" class="date">
                Last updated:
                <b>{{ dateDisplay }}</b>
            </div>
          </v-col>
      </v-row>
      
    <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    backLink: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    }
  },
  computed: {
    dateDisplay() {
      // convert the long date to an easy to read date
      const date = new Date(this.date);
      return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    }
  },
}
</script>
