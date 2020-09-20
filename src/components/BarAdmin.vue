<template>
    <v-layout justify-center>
      <v-app-bar
        color="transparent"
        app
        flat
      >
        <div class="pa-1"></div>
        <div
            :class="{'display-5 font-weight-medium': $vuetify.breakpoint.smAndUp,'title font-weight-medium': $vuetify.breakpoint.smAndDown, }"
          ><span class="purple--text">Admin</span></div>
        <v-spacer></v-spacer>
          <v-toolbar-items class="text-right" id="menu">
            <v-btn
              text
            ><router-link to="/admin"><span class="purple--text text-decoration-none">Home</span></router-link></v-btn>
            <v-btn
              text
            ><router-link v-if="getUser" to="/writer"><span class="purple--text text-decoration-none">New</span></router-link></v-btn>
            <router-link v-if="!getUser" to="/login" class="body-2 font-weight-bold">Login</router-link>
            <v-btn
              text
            ><a v-if="getUser" @click="signOut" class="body-2 font-weight-bold"><v-icon color="purple">mdi-logout</v-icon></a></v-btn>
          </v-toolbar-items>
      </v-app-bar>
    </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AppBar',
    data () {
      return {
        sheet: false,
        items: [
          { title: 'Home', icon: 'mdi-home-variant-outline', link:'/' },
          { title: 'About', icon: 'mdi-account-outline', link:'/about'  },
          { title: 'Video', icon: 'mdi-video-outline', link:'/video'  },
          { title: 'Photo', icon: 'mdi-image-outline', link:'/photo'}
        ],
        options: {
          fitToSection: false,
        }
      }
    },
    computed: {
    ...mapGetters(['getUser'])
    },
    methods: {
        ...mapActions(['logout']),
        signOut () {
        this.logout()
        if (this.$route.path !== '/') this.$router.replace('/')
        }
    }
};
</script>

<style scoped>
  a {  
    text-decoration: none;
    color: black;
    background-color: transparent;
  }
  .atas {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
</style>