import colors from 'vuetify/es5/util/colors'
const createSitemapRoutes = async () => {
  let routes = [];
  const { $content } = require('@nuxt/content')
  var posts = null
  if (posts === null || posts.length === 0)
    posts = await $content('articles').fetch();
  for (const post of posts) {
    routes.push(`articles/${post.slug}`);
  }
  return routes;
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Zhehai Zhang - %s',
    title: 'Home',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Hi, I'm Zhehai! I've dabbled in augmented reality applications, command line interfaces , tons of web apps, REST apis, and database management." },
      { hid: 'og:image', property: 'og:image', content: '/codereach.JPG'},
      { hid: 'twitter:card', name: 'twitter:card', content:'summary_large_image'},
      { hid: 'keywords', name: 'keywords', content: 'Zhehai Zhang, computer science, programming, software, development, uwaterloo'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/aos.client"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [ '@nuxt/content', '@nuxtjs/feed', '@nuxtjs/sitemap'
  ],
  feed () {
    const baseUrlArticles = 'https://zhehaizhang.com/articles'
    const baseLinkFeedArticles = '/feed/articles'
    const feedFormats = {
      rss: { type: 'rss2', file: 'rss.xml' },
      json: { type: 'json1', file: 'feed.json' },
    }
    const { $content } = require('@nuxt/content')

    const createFeedArticles = async function (feed) {
      feed.options = {
        title: "Zhehai's Blog",
        description: "Welcome to Zhehai's Blog",
        link: baseUrlArticles,
      }
      const articles = await $content('articles').fetch()

      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.slug}`

        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          date: article.published,
          description: article.summary,
          content: article.summary,
          author: article.authors,
        })
      })
    }

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedArticles}/${file}`,
      type: type,
      create: createFeedArticles,
    }))
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake:true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    defaultAssets : {
      font: {
        family: 'Montserrat'
      }
    }
  },
  sitemap: {
    hostname: 'https://zhehaizhang.com',
    gzip: true,
    routes: createSitemapRoutes
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
