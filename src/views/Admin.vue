<template>
<section>
  <BarAdmin/>
  <section>
    <v-container>
          <v-row no-gutters>
                <v-col cols="12" md="4" lg="4" v-for="(Post, idx) in Posts" :key="idx">
                  <div class="py-12"></div>
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
          </v-row>
        </v-container>
  </section>
</section>
</template>

<script>
import BarAdmin from '../components/BarAdmin'
import { firestore } from '@/firebase/firestore'
import { mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'
import _ from 'lodash'

export default {
    components: {
        BarAdmin
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
      this.$router.push({ name: 'edit', params: { key: v['.key'] } })
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

</style>
