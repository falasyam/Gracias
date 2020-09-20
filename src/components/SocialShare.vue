<template>
  <div class="social-share">
    <span>Share to your friends!</span>
    <div class="social-share-button">
      <a
        :href="`https://web.whatsapp.com/send?text=${data.url}`"
        class="whatsapp"
        target="_blank"
      >
        <v-icon>mdi-whatsapp</v-icon>
      </a>
      <span class="">⠀</span>
      <a
        :href="`https://t.me/share/url?url=${data.url}`"
        class="telegram"
        target="_blank"
      >
        <v-icon>mdi-telegram</v-icon>
      </a>
      <span class="">⠀</span>
      <a
        :href="`https://www.facebook.com/sharer/sharer.php?u=${data.url}&utm_medium=sharer&utm_campaign=social`"
        class="facebook"
        target="_blank"
      >
        <v-icon>mdi-facebook</v-icon>
      </a>
      <span class="">⠀</span>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <a
            v-on="on"
            :href="`https://twitter.com/intent/tweet?url=${data.url}`"
            class="twitter"
            target="_blank"
          >
            <v-icon>mdi-twitter</v-icon>
          </a>
        </template>

        <span>Share to Twitter</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'
import { firestore } from '@/firebase/firestore'
import _ from 'lodash'

export default {
    props: ["title"],
  firestore () {
    return {
      Posts: firestore
        .collection('Post')
        .where('show', '==', true)
        .orderBy('date', 'desc')
    }
  },
  data() {
    return {
      data: {
        url: null,
        title: this.getTitle
      }
    };
  },
  mounted() {
    this.data.url = window.location.href;
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
  methods: {
    ...mapMutations({ setKey: types.SET_KEY,
      setTitle: types.SET_TITLE,
      setContent: types.SET_CONTENT,
      setDate: types.SET_DATE,
      setImgUrl: types.SET_IMG_URL }),
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
  }
};
</script>
<style scoped>
    a {
        text-decoration: none;
    }
</style>