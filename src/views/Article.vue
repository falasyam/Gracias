<template>
    <section>
        <v-layout justify-center>
            <v-app-bar
                color="transparent"
                app
                flat
            >
                <v-btn icon color="#8e44ad" href="/blog"><v-icon color="#8e44ad">mdi-arrow-left</v-icon></v-btn>
                <div class="pa-1"></div>
                <div
                    :class="{'display-5 font-weight-medium': $vuetify.breakpoint.smAndUp,'title font-weight-medium': $vuetify.breakpoint.smAndDown, }"
                ><span class="purple--text">Gracias</span></div>
                <v-spacer></v-spacer>
                <v-toolbar-items class="text-right" id="menu">
                </v-toolbar-items>
            </v-app-bar>
        </v-layout>
        <section>
        <v-row no-gutters>
            <v-col cols="12" md="10" offset-md="1">
                <div class="py-9"></div>
                <v-col cols="12">
                    <div class="py-2"></div>
                    <span class="judul font-weight-bold">{{ getTitle }}</span><br/>
                    <v-icon>mdi-account</v-icon><span>SHNGRC</span><span class="">⠀</span>     
                    <v-icon>mdi-calendar</v-icon><span>{{ new Date(getDate) }}</span>
                </v-col>
                <v-col cols="12">
                    <v-chip color="purple">
                    <router-link to="/"><span class="white--text text-decoration-none">Home</span></router-link> <v-icon color="white">mdi-chevron-right</v-icon> 
                    <router-link to="/blog/"><span class="white--text text-decoration-none">Blog</span></router-link> <v-icon color="white">mdi-chevron-right</v-icon> 
                    <span class="white--text">{{getTitle}}</span>
                    </v-chip>
                </v-col>
                <v-col cols="12" align="center" justify="center">
                    <v-img
                        class="white--text"
                        :src="getImgUrl"
                    />
                </v-col>
                <v-col>
                    <span v-html="imgResizedContent"></span>
                </v-col>
                <v-col>
                  <SocialShare/>
                </v-col>
                <div v-if="getUser" class="pa-3">
                    <v-row class="fill-height" align="center" justify="end"  >
                    <v-btn @click="update" class="ma-2">edit</v-btn>
                    <v-btn @click="showDelDialog(true)" class="ma-2">delete</v-btn>
                    </v-row>
                </div>
            </v-col>
                <delete-dialog
                :openDelDialog="openDelDialog"
                v-on:showDelDialog="showDelDialog"
                >
                </delete-dialog>
                <v-col cols="12"  md="10" offset-md="1">
                    <v-card flat>
                        <disqus class="ma-3"/>
                    </v-card>
                </v-col>
        </v-row>
        </section>
        <Footer/>
    </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'
import { firestore } from '@/firebase/firestore'
import _ from 'lodash'
import Disqus from '../components/Disqus'
import deleteDialog from '../components/DeleteDialog'
import SocialShare from '../components/SocialShare'
import Footer from '../components/Footer'

export default {
  components: {
    SocialShare,
    Disqus,
    deleteDialog,
    Footer
  },
  metaInfo() {
        return {
            title: this.getTitle,
            meta: [
                { name: 'description', content:  + this.userData.name },
                { property: 'og:title', content: this.getTitle+''},
                { property: 'og:site_name', content: 'Gracias'},
                { property: 'og:description', content:  + this.getContent },
                { property: 'og:type', content: 'profile'},
                { property: 'og:url', content: 'https://fanbase.shaniagracia.my.id/post/' + this.getKey},
                { property: 'og:image', content: this.getImgUrl }    
            ]
        }
    },
  computed: {
    ...mapGetters([
      'getKey',
      'getTitle',
      'getContent',
      'getDate',
      'getImgUrl',
      'getUser'
    ]),
    imgResizedContent () {
      return _.replace(this.getContent, new RegExp('img src', 'g'), 'img width="100%" src')
    }
  },
  data () {
    return {
      openDelDialog: false
    }
  },
  created () {
    if (this.getKey === '') this.getPost()
  },
  methods: {
    ...mapMutations({ setKey: types.SET_KEY,
      setTitle: types.SET_TITLE,
      setContent: types.SET_CONTENT,
      setDate: types.SET_DATE,
      setImgUrl: types.SET_IMG_URL }),
    update () {
      this.$router.push('/updater')
    },
    getPost () {
      firestore
        .collection('Post')
        .doc(this.$route.params.key)
        .get()
        .then(doc => {
          let post = doc.data()
          this.setKey(this.$route.params.key)
          this.setTitle(post.title)
          this.setContent(post.content)
          this.setDate(post.date.seconds)
          this.setImgUrl(post.imgUrl)
        })
        .catch(error => {
          console.error(`getPost error: ${error}`)
        })
    },
    showDelDialog (v) {
      this.openDelDialog = v
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .judul {
    font-size: 35px;
    font-weight: bold;
  }

  .garisbawah {
    text-decoration: underline overline;
    text-decoration-line: underline overline;
    text-decoration-color: #7405a1;
  }

  .blogs {
    font-size: 20px;
    letter-spacing: 3px;
  }
</style>