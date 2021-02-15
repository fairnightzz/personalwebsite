<template>
  <div>
    <v-parallax
      src = "/cover.jpg" 
      height="800"
      class="mb-16"
    >
    <v-overlay absolute color="black" opacity="0.5">
      <v-row>
        <v-col cols = "8" class="ma-2" >
          <v-spacer></v-spacer>
          <h1 data-aos="fade-up" class="display-3 font-weight-medium">
          Hi, I'm Zhehai (Mark) Zhang. 
          </h1>   
        </v-col>
     </v-row>
      <v-row>
        <v-col cols="8" class="ma-2">
          <h2 data-aos="flip-up" class ="display-1 font-weight-regular">
            Welcome to my website. 
          </h2>
        </v-col>
 
      </v-row>

    </v-overlay>
   </v-parallax> 

    <v-row justify="center" align="center" >
      <v-col sm="8" xs="8" md="4" lg="4" class="ma-2" >
        <v-card data-aos="fade-up">
          <v-card-text>
          <h3 :class="$vuetify.breakpoint.smAndDown ? 'title' : 'display-1'">I'm a first year student studying Computer Science at the University of Waterloo.</h3>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="8" xs="8" md="4" lg="4" class="ma-2">
        <v-img eager src="/explore.jpg">
        </v-img>
      </v-col>
    </v-row>
     <v-row justify="center" align="center" >
      <v-col sm="8" xs="8" md="4" lg="4" class="ma-2">
        <v-carousel cycle hide-delimiters hide-delimiter-background >
          <v-carousel-item eager  contain src="canoe.jpg"></v-carousel-item>
          <v-carousel-item eager contain src="chess.JPG"></v-carousel-item>
          <v-carousel-item eager contain src="lake.jpg"></v-carousel-item>
        </v-carousel>
      </v-col>
 
      <v-col sm="8" xs="8" md="4" lg="4" class="ma-2" >
        <v-card data-aos="fade-up">
          <v-card-text>
          <h3 :class="$vuetify.breakpoint.smAndDown ? 'title' : 'display-1'">I like trying new things!</h3>
          </v-card-text>
        </v-card>
      </v-col>
   </v-row>

   <v-row justfiy="center" align="center">
     <v-col cols="12">
     <h1 class= "text-center" :class="$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1'">Projects</h1>
     </v-col>
   </v-row>

   <v-row justify="center" align="center" >
     <v-container class = "d-flex flex-wrap align-content-space-around" align="center" justify="center">
        <v-hover v-slot="{hover}" v-for="(project,index) in projects" :key="index">
          <v-col  xs="8" sm="5" md = "4" lg="4">
            <v-card flat data-aos="flip-up">
              <v-img :src="project.imgsrc" height="300">
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="purple" opacity="0.8">
                    <v-card-text  align="center" class="white--text body-1">
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
        {name: "Subspace", description:"Won HackTheNorth 2021. Work side-by-side again during COVID? Subspace gives you cloud-based desktops for remote collaboration, allowing you to instantaneously share your computing environment with others.", imgsrc: "/projects/subspace.jpg"},
        {name: "9it - Version Control System", description: "totally not git! 9it-cli is a lightweight version control system that is intended for individual use.", imgsrc: "/projects/9it.png"},
        {name: "Tinderwal", description:"Vote for the favourite pictures of your friends, Tinder style!", imgsrc: "/projects/tinderwal.png"},
        {name: "AR-itus", description:"Rehabilitating individuals who are suffering with hand-eye coordination problems with the use of Augmented Reality technology.", imgsrc: "/projects/aritus.png"},
        {name: "Teleclinic", description: "Online medical clinic for your apppointments and walk-ins, seamlessly.", imgsrc: "/projects/teleclinic.jpg"},
        {name: "Quizzikal", description: "A competitive educational trivia web application.", imgsrc: "/projects/quizzikal.jpg"},
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