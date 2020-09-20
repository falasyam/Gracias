<template>
    <section>
        <BlogBar/>
        <section>
        <v-responsive>
            <v-sheet width="100vw" height="220px">
                <v-row no-gutters>
                    <v-col cols="12" md="12" lg="12" xs="12" sm="12" class="text-center">
                        <div class="py-12"></div>
                        <span class="display-2 font-weight-bold spasi">News</span>
                    </v-col>
                    <v-col cols="12" md="12" lg="12" xs="12" sm="12" class="text-center">
                        <span class="subtitle-1 font-weight-normal">Berita terbaru dari Gracias dan Shania Gracia</span>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-responsive>
        <v-container>
          <v-row no-gutters>
                <v-col cols="12" md="4" lg="4" v-for="(Post, idx) in Posts" :key="idx">
                  <div class="py-4"></div>
                  <v-card
                    hover
                    class="mx-auto"
                    max-width="344"
                    @click="viewPost(Post)"
                  >
                    <v-img
                      :src="Post.imgUrl"
                      height="200px"
                      @click="viewPost(Post)"
                    ></v-img>
                    <v-card-title @click="viewPost(Post)">
                      {{Post.title}}
                    </v-card-title>
                    <v-card-subtitle>
                      <span v-html="truncateString(Post.content)" class="inline-block"></span>
                    </v-card-subtitle>
                    <v-card-actions>
                      <v-btn text @click="viewPost(Post)">Read More</v-btn>
                    </v-card-actions>
                  </v-card>
                  <div class="py-2"></div>
                </v-col>
                <v-col cols="12">
                    <div class="py-2"></div>
                    <v-pagination
                        v-model="page"
                        :length="1"
                        circle
                    ></v-pagination>
                </v-col>
          </v-row>
        </v-container>
        </section>
        <Footer/>
    </section>
</template>

<script>
import BlogBar from '../components/BlogBar'
import Footer from '../components/Footer'

import { firestore } from '@/firebase/firestore'
import { mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'
import _ from 'lodash'

export default {
    components: {
        BlogBar,
        Footer,
    },
    data () {
      return {
        page: 1,
      }
    },
    firestore () {
    return {
      Posts: firestore
        .collection('Post')
        .where('show', '==', true)
        .orderBy('date', 'desc')
    }
  },
  methods: {
    ...mapMutations({ setKey: types.SET_KEY,
      setTitle: types.SET_TITLE,
      setContent: types.SET_CONTENT,
      setDate: types.SET_DATE,
      setImgUrl: types.SET_IMG_URL }),
    viewPost (v) {
      this.setKey(v['.key'])
      this.setTitle(v.title)
      this.setContent(v.content)
      this.setDate(v.date.seconds)
      this.setImgUrl(v.imgUrl)
      this.$router.push({ name: 'post', params: { key: v['.key'] } })
    },
    truncateString (v) {
      return _.truncate(v, {
        'length': 80
      })
    }
  }
}
</script>

<style scoped>

  .spasi {
    letter-spacing: 3px;
  }
</style>