<template>
  <div>
    <v-img :src="require('~/assets/background.webp')" height="100vh" class="mb-16" eager>
      <v-overlay absolute color="black" opacity="0.5">
        <v-row>
          <v-col cols="8" class="ma-2">
            <h1 class="display-3 font-weight-medium">
              Hi, I'm Zhehai Zhang.
            </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8" class="ma-2">
            <h2 data-aos="flip-up" class="display-1 font-weight-regular">
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
        <h2 class="text-center font-weight-bold" :class="$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3'"
          id="about">About Me</h2>
      </v-col>
    </v-row>


    <v-row justify="center" align="center" class="my-6">
      <v-col sm="6" xs="6" md="3" lg="3">
        <v-carousel cycle :interval="4000" hide-delimiters hide-delimiter-background :show-arrows="false">
          <v-carousel-item>
            <v-row class="fill-height ma-2" align="center" justify="center">
              <v-card class="ma-2">
                <v-card-text>
                  <h3 :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'">I'm a 3A Computer Science student at
                    the University of Waterloo!</h3>
                </v-card-text>
              </v-card>
            </v-row>
          </v-carousel-item>
          <v-carousel-item>
            <v-row class="fill-height ma-2" align="center" justify="center">
              <v-card class="ma-2">
                <v-card-text>
                  <h3 :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'">I love competing in hackathons to
                    challenge my critical thinking and creativity.</h3>
                </v-card-text>
              </v-card>
            </v-row>
          </v-carousel-item>
          <v-carousel-item>
            <v-row class="fill-height ma-2" align="center" justify="center">
              <v-card class="ma-2">
                <v-card-text>
                  <h3 :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'">I love starting new projects and
                    trying out new technologies.</h3>
                </v-card-text>
              </v-card>
            </v-row>
          </v-carousel-item>
          <v-carousel-item>
            <v-row class="fill-height ma-2" align="center" justify="center">
              <v-card class="ma-2">
                <v-card-text>
                  <h3 :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headline'">When I'm not coding, I'm either
                    swimming or playing volleyball!</h3>
                </v-card-text>
              </v-card>
            </v-row>
          </v-carousel-item>

        </v-carousel>
      </v-col>

      <v-col sm="10" xs="10" md="6" lg="6">
        <v-carousel cycle :interval="4000" hide-delimiters hide-delimiter-background :show-arrows="false"
          class="ma-0 pa-0">
          <v-carousel-item contain eager :src="require('~/assets/carousel/profile.webp')"></v-carousel-item>
          <v-carousel-item contain eager :src="require('~/assets/carousel/masseyhacks.webp')"></v-carousel-item>
          <v-carousel-item contain eager :src="require('~/assets/carousel/digitalcircuits.webp')"></v-carousel-item>
          <v-carousel-item contain eager :src="require('~/assets/carousel/swim.webp')"></v-carousel-item>
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
        <v-parallax :src="require('~/assets/skills/hackthenorth.webp')" height="300">
          <v-overlay absolute black opacity="0.6">
            <h1 class="white--text text-center ">Programming Expertise</h1>
            <div class="d-flex justify-center flex-wrap">
              <v-chip v-for="(skill, index) in skills" :key="index" class="ma-2">{{ skill.name }}</v-chip>
            </div>
          </v-overlay>
        </v-parallax>

      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn icon bottom @click="$vuetify.goTo('#experience')">
        <v-icon>
          mdi-arrow-down
        </v-icon>
      </v-btn>
    </v-row>

    <v-row justify="center" align="center" class="mt-6" id="experience">
      <v-col cols="12">
        <h2 class="text-center font-weight-bold" :class="$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3'">
          Experience</h2>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-container class="d-flex flex-wrap align-content-space-around" align="center" justify="center">
        <v-hover v-slot="{ hover }" v-for="(experience, index) in experiences" :key="index">
          <v-col xs="8" sm="6" md="4" lg="4">
            <v-card flat data-aos="flip-up" :href="experience.link" target="_blank">
              <v-img :src="require(`~/assets/experience/${experience.imgsrc}`)" height="400">
                <v-expand-transition>
                  <v-overlay v-if="hover" absolute color="purple" opacity="0.8">
                    <v-card-text link align="center" class="white--text body-1">
                      {{ experience.description }}
                    </v-card-text>
                  </v-overlay>
                </v-expand-transition>
              </v-img>
              <v-card-title>{{ experience.name }}</v-card-title>
              <v-card-subtitle>{{ experience.role }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-hover>
      </v-container>
    </v-row>

    <v-row justfiy="center" align="center" class="mt-6" id="projects">
      <v-col cols="12">
        <h2 class="text-center font-weight-bold" :class="$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3'">
          Projects</h2>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-container class="d-flex flex-wrap" align="center" align-items="center" justify="center">
        <v-hover v-slot="{ hover }" v-for="(project, index) in projects" :key="index">
          <v-col xs="8" sm="6" md="4" lg="4">
            <v-card flat data-aos="flip-up" :href="project.link" target="_blank">
              <v-img :src="require(`~/assets/projects/${project.imgsrc}`)" height="400">
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="purple" opacity="0.8">
                    <v-card-text align="center" class="white--text body-1">
                      {{ project.description }}
                    </v-card-text>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
              <v-card-title>{{ project.name }}</v-card-title>
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
        { name: "ShopAdvisr", description: "As university students, we are finally able to experience moving out and living on our own. Something we've realized is that shopping is an inescapable part of adult life. It can be tedious to figure out what to buy in the moment, and keeping track of items after you've decided and then searching for them throughout the store is no easy feat. Hence, we've decided to design an app that makes shopping cheap, convenient and smart.", imgsrc: "shopadvisr.gif", link: "https://devpost.com/software/shopadvisr" },
        { name: "WidgetHub", description: "The purpose of WidgetHub is to provide a quick and intuitive way to build plug and play widgets for your own websites. Simply add your handle, customize how you want your widget to look, and paste the code we give you onto your own site.", imgsrc: "widgethub.webp", link: "https://devpost.com/software/widgethub" },
        {
          name: "Subspace", description: "Won HackTheNorth 2020++. Work side-by-side again during COVID? Subspace gives you cloud-based desktops for remote collaboration, allowing you to instantaneously share your computing environment with others.",
          imgsrc: "subspace.webp", link: "https://devpost.com/software/subspace"
        },
        { name: "9it - Version Control System", description: "totally not git! 9it-cli is a lightweight version control system that is intended for individual use.", imgsrc: "9it.webp", link: "https://github.com/NaiveGit/9it-cli" },
        { name: "Discourse VR", description: "A remote solution for feedback/recording of virtual parliamentary debates", imgsrc: "discoursevr.webp", link: "https://devpost.com/software/discoursevr" },
        { name: "VR Open World Game", description: "An Open World VR Sword fighting game using Unity, Windows Mixed Reality Headset, and Xbox 360 Kinect Sensors", imgsrc: "vropenworld.gif", link: "https://github.com/Breality/ICS4U-FSEV2" },
        { name: "AR-itus", description: "Rehabilitating individuals who are suffering with hand-eye coordination problems with the use of Augmented Reality technology.", imgsrc: "aritus.webp", link: "https://devpost.com/software/ar-itus" },
        { name: "Teleclinic", description: "Online medical clinic for your apppointments and walk-ins, seamlessly.", imgsrc: "teleclinic.webp", link: "https://devpost.com/software/teleclinic" },
        { name: "Quizzikal", description: "A competitive educational trivia web application.", imgsrc: "quizzikal.webp", link: "https://devpost.com/software/quizzical-3k7ygv" },
        { name: "Tinderwal", description: "Vote for the favourite pictures of your friends, Tinder style!", imgsrc: "tinderwal.webp", link: "https://github.com/fairnightzz/Tinderwal" }
      ],
      skills: [
        { name: "Linux Administration" },
        { name: "C++" },
        { name: "C" },
        { name: "C#" },
        { name: "Unity Game Engine" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Node.js" },
        { name: "Vue.js" },
        { name: "React.js" },
        { name: "PostgreSQL/MySQL" },
        { name: "REST/GraphQL" },
        { name: "DynamoDB" },
        { name: "Python" },
        { name: "BeautifulSoup/Puppeteer/Selenium" },
        { name: "Firebase" },
        { name: "Virtual Reality" },
        { name: "Augmented Reality" },
        { name: "Terraform" },
        { name: "AWS Services" },
      ],
      experiences: [
        { name: "LinkedIn", role: "Software Engineer Intern", description: "Today, LinkedIn leads a diversified business with revenues from membership subscriptions, advertising sales and recruitment solutions under the leadership of Ryan Roslansky. In December 2016, Microsoft completed its acquisition of LinkedIn, bringing together the world’s leading professional cloud and the world’s leading professional network.", imgsrc: "linkedin.webp" },
        {
          name: "BitGo", role: "Software Engineer Intern", description: "BitGo provides the most secure and scalable solutions for the digital asset economy, offering regulated custody, borrowing and lending, and core infrastructure to investors and builders alike.", imgsrc: "bitgo.webp"
        },
        { name: "Splunk", role: "Fullstack IoT Software Engineer Intern", description: "Splunk is the data platform that powers enterprise observability, unified security and limitless custom applications in hybrid environments.", imgsrc: "splunk.webp" },
        { name: "D2L Corporation", role: "Software Developer Intern", description: "D2L Labs explores the potential for technology to transform the future of learning. We seek to understand how emerging technologies, such as artificial intelligence (AI), virtual reality (VR), and others, can be leveraged to enable new ways of learning. Our findings serve as an input into our product roadmap and future company direction, and can help our customers understand the implications for their own organizations. Learn more about what we do below.", imgsrc: "d2l.webp" },
        { name: "ToHacks", role: "Developer", description: "TOHacks aims to connect talented youth entrepreneurs, leaders and innovators with the top industry professionals in rising fields of new technologies. Having recently hosted its inaugural hackathon, TOHacks will continue to foster an environment that promises to embolden these students towards pursuing a career in STEAM.", imgsrc: "tohacks.webp" },
        { name: "Bolt Bootcamps", role: "Technical Director", description: "Bolt represents a unique combination of a hackathon and a case competition for students to delve into the world of business technology.", imgsrc: "bolt.webp" },
        { name: "CodeReach", role: "Teacher", description: "CodeReach helps create the foundation of computer science for elementary school students. I prepared lesson materials and taught the Python programming language to 30+ students.", imgsrc: "codereach.webp" },
        { name: "MasseyHacks VI", role: "Executive", description: "Managed logistics behind workshop livestreams, and designed graphics for the event.", imgsrc: "masseyhacks.webp" },
        { name: "Computer Science Club", role: "Junior Leader", description: "Taught competitive programming techniques and algorithms to high school students. Organized local programming competitions on self-hosted online judge.", imgsrc: "csclub.webp" },
        { name: "Chess Club", role: "Leader", description: "Organized official qualifier tournaments for the annual Ontario Chess Championships. Lead the team to win the Ontario High School Chess Tournament 2 years in a row.", imgsrc: "chess.webp" },
        { name: "MIT Media Lab", role: "Participant", description: "Developed augmented reality systems in C# using HTC Vive Pro headset and Leap Motion Orion for dynamic depth analysis.", imgsrc: "mit.webp" },
        { name: "City of Windsor & Lasalle", role: "Swim Instructor", description: "Taught swimming lessons for over 10 swimmer levels at the Lifesaving Society Standard.", imgsrc: "swim.webp" },
        { name: "CaYPT Bronze Medalist", role: "Competitor", description: "National Physics Competition where our team was tasked to solve 10 open-ended physics problems by conducting research, experiments, and simulations.", imgsrc: "caypt.webp" },
        { name: "SHAD Enrichment Program", role: "Participant", description: "Lead a business team for Flood Watch, an app designed to help people in flood prone areas in times of need.", imgsrc: "shad.webp" },
      ]
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>
.pimage {
  opacity: 0.4;
}

.cover {
  filter: brightness(50%);
}
</style>