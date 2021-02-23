<template>
  <div>
    <v-img
      src = "/codereach.JPG" 
      height="100vh"
      class="mb-16"
    >
    <v-overlay absolute color="black" opacity="0.5">
      <v-row>
        <v-col cols = "8" class="ma-2" >
          <h1 class="display-3 font-weight-medium">
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
      <v-row align="center" justify="center">
        <v-btn icon bottom @click="$vuetify.goTo('#about')">
          <v-icon>
            mdi-arrow-down
          </v-icon>
        </v-btn>
      </v-row>
  </v-overlay>
   </v-img> 

   <v-row justfiy="center" align="center" class="mt-6">
     <v-col cols="12">
     <h2 class= "text-center font-weight-bold"  :class="$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3'" id="about">About Me</h2>
     </v-col>
   </v-row>


     <v-row justify="center" align="center" class="my-6">
      <v-col sm="8" xs="8" md="4" lg="4" >
        <v-carousel cycle :interval="3000" hide-delimiters hide-delimiter-background :show-arrows="false" >
          <v-carousel-item >
            <v-row class="fill-height ma-2" align="center" justify="center" >
            <v-card class="ma-2">
              <v-card-text>
              <h3 :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'">I'm a first year student studying Computer Science at the University of Waterloo.</h3>
              </v-card-text>
            </v-card>
            </v-row>
         </v-carousel-item>
          <v-carousel-item >
            <v-row class="fill-height ma-2" align="center" justify="center" >
            <v-card class="ma-2">
              <v-card-text>
              <h3 :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'">I love competing in hackathons to challenge my critical thinking and creativity.</h3>
              </v-card-text>
            </v-card>
            </v-row>
         </v-carousel-item>
           <v-carousel-item >
            <v-row class="fill-height ma-2" align="center" justify="center" >
            <v-card class="ma-2">
              <v-card-text>
              <h3 :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'">Some of my hobbies include building FPGA and VHDL designs, implementing project management frameworks for personal use, swimming, and managing the Hearthstone Esports Team.</h3>
              </v-card-text>
            </v-card>
            </v-row>
         </v-carousel-item>
           <v-carousel-item >
            <v-row class="fill-height ma-2" align="center" justify="center" >
            <v-card class="ma-2">
              <v-card-text>
              <h3 :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'">When I'm not coding, I enjoy exploring the world around me!</h3>
              </v-card-text>
            </v-card>
            </v-row>
         </v-carousel-item>
 
       </v-carousel>
      </v-col>
 
      <v-col sm="8" xs="8" md="4" lg="4" >
        <v-carousel cycle :interval="3000" hide-delimiters hide-delimiter-background :show-arrows="false" class="ma-0 pa-0">
          <v-carousel-item eager  contain src="/profile.jpg"></v-carousel-item>
          <v-carousel-item eager contain src="/hackathons/masseyhacks.jpg"></v-carousel-item>
          <v-carousel-item eager contain src="/hobbies/digitalcircuits.png"></v-carousel-item>
          <v-carousel-item eager contain src="/explore/canoe.jpg"></v-carousel-item>
        </v-carousel>
      </v-col>
   </v-row>
      <v-row align="center" justify="center">
        <v-btn icon bottom @click="$vuetify.goTo('#skills')">
          <v-icon>
            mdi-arrow-down
          </v-icon>
        </v-btn>
      </v-row>
 
   <v-row justify="center" align="center" class="my-6" id="skills">
     <v-col cols="12">
       <v-parallax src="hackathons/hackthenorth.jpg" height="300">
        <v-overlay absolute black opacity="0.6">
         <h1 class="white--text text-center ">Skills</h1>
         <v-chip v-for="(skill,index) in skills" :key="index" class="ma-2">{{skill.name}}</v-chip>
        </v-overlay>
       </v-parallax>

     </v-col>
   </v-row>
      <v-row align="center" justify="center">
        <v-btn icon bottom @click="$vuetify.goTo('#projects')">
          <v-icon>
            mdi-arrow-down
          </v-icon>
        </v-btn>
      </v-row>
 
   <v-row justfiy="center" align="center" class="mt-6" id="projects">
     <v-col cols="12">
     <h2 class= "text-center font-weight-bold"  :class="$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3'">Projects</h2>
     </v-col>
   </v-row>

   <v-row justify="center" align="center" >
     <v-container class = "d-flex flex-wrap" align="center" align-items="center" justify="center">
        <v-hover v-slot="{hover}" v-for="(project,index) in projects" :key="index">
          <v-col  xs="8" sm="6" md = "4" lg="4">
            <v-card flat data-aos="flip-up">
              <v-img :src="project.imgsrc" eager height="400">
                <v-expand-transition>
                  <v-overlay v-if="hover" absolute color="purple" opacity="0.8">
                    <v-card-text  align="center" class="white--text body-1">
                      {{project.description}}
                    </v-card-text>
                  </v-overlay >
               </v-expand-transition>
             </v-img>
              <v-card-title>{{project.name}}</v-card-title>
            </v-card>
          </v-col>
          </v-hover> 
       </v-container> 
    </v-row>

   <v-row justify="center" align="center" class="mt-6" id="experience">
     <v-col cols="12">
     <h2 class= "text-center font-weight-bold"  :class="$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3'">Experience</h2>
     </v-col>
   </v-row>

   <v-row justify="center" align="center" >
     <v-container class = "d-flex flex-wrap align-content-space-around" align="center" justify="center">
        <v-hover v-slot="{hover}" v-for="(experience,index) in experiences" :key="index">
          <v-col  xs="8" sm="6" md = "4" lg="4">
            <v-card flat data-aos="flip-up">
              <v-img :src="experience.imgsrc" eager height="400">
                <v-expand-transition>
                  <v-overlay v-if="hover" absolute color="purple" opacity="0.8">
                    <v-card-text  align="center" class="white--text body-1">
                      {{experience.description}}
                    </v-card-text>
                  </v-overlay >
               </v-expand-transition>
             </v-img>
              <v-card-title>{{experience.name}}</v-card-title>
            </v-card>
          </v-col>
          </v-hover> 
       </v-container> 
    </v-row>


  </div>
</template>

<script>

export default {
  components: {
  },
  data: () => {
    return {
      projects: [
        {name: "Subspace", description:"Won HackTheNorth 2020++. Work side-by-side again during COVID? Subspace gives you cloud-based desktops for remote collaboration, allowing you to instantaneously share your computing environment with others.", imgsrc: "/projects/subspace.jpg"},
        {name: "9it - Version Control System", description: "totally not git! 9it-cli is a lightweight version control system that is intended for individual use.", imgsrc: "/projects/9it.png"},
        {name: "Tinderwal", description:"Vote for the favourite pictures of your friends, Tinder style!", imgsrc: "/projects/tinderwal.png"},
        {name: "AR-itus", description:"Rehabilitating individuals who are suffering with hand-eye coordination problems with the use of Augmented Reality technology.", imgsrc: "/projects/aritus.png"},
        {name: "Teleclinic", description: "Online medical clinic for your apppointments and walk-ins, seamlessly.", imgsrc: "/projects/teleclinic.jpg"},
        {name: "Quizzikal", description: "A competitive educational trivia web application.", imgsrc: "/projects/quizzikal.jpg"},
      ],
      skills: [
        {name: "Linux Administration"},
        {name: "C++"},
        {name: "C"},
        {name: "C#"},
        {name: "Unity"},
        {name: "Node.js"},
        {name: "Vue.js"},
        {name: "PostgreSQL"},
        {name: "Python"},
        {name: "Firebase"},
        {name: "Virtual Reality"},
        {name: "Augmented Reality"},
        {name: "Adobe Suite"},
      ],
      experiences: [
        {name: "CodeReach", description:"CodeReach helps create the foundation of computer science for elementary school students. I prepared lesson materials and taught the Python programming language as a teacher.", imgsrc: "/experience/codereach.png"},
        {name: "MIT Media Lab", description: "Developed augmented reality systems in C# using HTC Vive Pro headset and Leap Motion Orion for dynamic depth analysis.", imgsrc: "/experience/mit.png"},
        {name: "City Swim Instructor", description:"Taught swimming lessons for over 10 swimmer levels at the Lifesaving Society Standard.", imgsrc: "/experience/swim.jpg"},
        {name: "CaYPT", description:"National Physics Competition where our team was tasked to solve 10 open-ended physics problems by conducting research, experiments, and simulations.", imgsrc: "/experience/caypt.png"},
        {name: "SHAD Enrichment Program", description: "Lead a business team for Flood Watch, an app designed to help people in flood prone areas in times of need.", imgsrc: "/experience/shad.JPG"},
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