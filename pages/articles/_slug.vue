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
    <v-col xl="4" lg="6" md="6" sm="8" cols="8" class="pa-2">
      <nuxt-content :document="doc" />
    </v-col>
  </v-row>
  </Default>
</template>


<script>
import Vue from 'vue'
import AppCopyButton from '~/components/app/AppCopyButton'

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
  },
  mounted () {
    setTimeout(() => {
      const blocks = document.getElementsByClassName('nuxt-content-highlight')
      for (const block of blocks) {
        const CopyButton = Vue.extend(AppCopyButton)
        const component = new CopyButton().$mount()
        block.appendChild(component.$el)
      }
    }, 100)
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
    min-height: 100%;
    min-width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

.nuxt-content .nuxt-content-highlight {
  position: relative;
  }
.nuxt-content .nuxt-content-highlight .copy {
  position: absolute;
  right: 0px;
  top: 0px;
  }
</style>