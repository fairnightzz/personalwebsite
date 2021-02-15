<template>
  <div>
    <v-parallax
      src = "/cover.jpg" 
      height="800"
      class="mb-16"
    >
    <v-overlay absolute color="black" opacity="0.5">
      <v-row>
        <v-col cols = "12" >
          <h1 data-aos="fade-up" class="display-3 font-weight-medium">
          Hi, I'm Zhehai (Mark) Zhang. 
          </h1>   
        </v-col>
        <v-col cols="12">
          <h2 data-aos="flip-up" class ="display-1 font-weight-regular">
            Welcome to my website. 
          </h2>
        </v-col>
      </v-row>

    </v-overlay>
   </v-parallax> 

    <v-row justify="center" align="center" >
      <v-col cols="4" class="ma-2" >
        <v-card data-aos="fade-up">
          <v-card-text>
          <h3 class="display-1">I'm a first year student studying Computer Science at the University of Waterloo.</h3>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" class="ma-2">
        <v-img eager src="/explore.jpg">
        </v-img>
      </v-col>
    </v-row>
     <v-row justify="center" align="center" >
      <v-col cols="4" class="ma-2">
        <v-carousel cycle hide-delimiters :show-arrows="false">
          <v-carousel-item eager  contain src="canoe.jpg"></v-carousel-item>
          <v-carousel-item eager contain src="chess.JPG"></v-carousel-item>
          <v-carousel-item eager contain src="lake.jpg"></v-carousel-item>
        </v-carousel>
      </v-col>
 
      <v-col cols="4" class="ma-2" >
        <v-card data-aos="fade-up">
          <v-card-text>
          <h3 class="display-1">I like trying new things!</h3>
          </v-card-text>
        </v-card>
      </v-col>
   </v-row>

   <v-row justify="center" align="center" >
     <v-container class = "d-flex flex-wrap align-content-space-around">
        <v-hover v-slot="{hover}" v-for="(project,index) in projects" :key="index">
          <v-col cols="4">
            <v-card flat data-aos="flip-up">
              <v-img :src="project.imgsrc" height="300">
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="pink" opacity="0.5">
                    <v-card-text  align="center" class="white--text display-1">
                      {{project.description}}
                    </v-card-text>
                  </v-overlay >
               </v-fade-transition>
             </v-img>
              <v-card-title>{{project.name}}</v-card-title>
              
            </v-card>
          </v-col>
          </v-hover> 
       </v-container> 
    </v-row>


  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data: () => {
    return {
      projects: [
        {name: "Tinderwal", description:"Vote based on your faour", imgsrc: "/deca.JPG"},
        {name: "9it", description: "CLI system", imgsrc: "/hackthenorth.jpg"},
        {name: "Tinderwal", description:"Vote based on your faour", imgsrc: "/deca.JPG"},
        {name: "Tinderwal", description:"Vote based on your faour", imgsrc: "/deca.JPG"}

      ]
    }
  },
  mounted: function() {
  }
}
</script>

<style scoped>
  .pimage {
    opacity: 0.4;
  }
  .cover {
    filter:brightness(50%);
  }
</style>