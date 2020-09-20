<template>
<section>
  <BarAdmin/>
  <section>
    <v-container>
      <v-row no-gutters>
      <v-col cols="12" md="7" offset-md="1">
        <div class="py-12"></div>
        <v-form>
          <v-text-field
            v-model="title"
            label="Title"
            required>
          </v-text-field>
          <file-uploader v-on:downloadURL="getDownloadUrl" v-bind:oldImgUrl="oldImgUrl" class="mb-4"/>
        </v-form>
        <vue-editor
            id="writer"
            v-model="content"
            useCustomImageHandler
            @imageAdded="handleImageAdded"
        />
      </v-col>
        <v-col cols="12" class="fill-height ma-3" align="center" justify="end">
          <v-btn @click="savePost">save</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</section>
</template>

<script>
import BarAdmin from '@/components/BarAdmin.vue'
import { VueEditor } from 'vue2-editor'
import { firestore } from '@/firebase/firestore'
import { firestorage } from '@/firebase/firestorage'
import FileUploader from '@/components/FileUploader'
import { mapGetters, mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'

export default {
  components: {
    BarAdmin,
    VueEditor,
    FileUploader
  },
  data () {
    return {
      oldImgUrl: ''
    }
  },
  created () {
    if (this.$route.name === 'writer') this.initArticleData()
    if (this.getKey !== '') this.oldImgUrl = this.getImgUrl
  },
  computed: {
    ...mapGetters(['getKey', 'getTitle', 'getContent', 'getImgUrl']),
    title: {
      get () {
        return this.getTitle
      },
      set (value) {
        this.updateTitle(value)
      }
    },
    content: {
      get () {
        return this.getContent
      },
      set (value) {
        this.updateContent(value)
      }
    }
  },
  methods: {
    ...mapMutations({
      updateTitle: types.SET_TITLE,
      updateContent: types.SET_CONTENT,
      initArticleData: types.INIT_ARTICLE_DATA
    }),
    savePost () {
      firestore
        .collection('Post')
        .doc(this.getKey || new Date().getTime().toString())
        .set({
          title: this.title,
          content: this.content,
          date: {
            seconds: new Date().getTime(),
            nanoseconds: 0
          },
          imgUrl: this.imgUrl || this.getImgUrl,
          show: true
        })
        .then(() => this.$router.push('/admin'))
        .catch((error) => {
          console.error(`Error adding document: ${error}`)
        })
    },
    getDownloadUrl (v) {
      this.imgUrl = v
    },
    handleImageAdded (file, Editor, cursorLocation) {
      let uploadTask = firestorage.ref('images/' + file.name).put(file)
      uploadTask.on('state_changed', {
      }, error => {
        console.error(`Upload error occured: ${error}`)
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL)
          Editor.insertEmbed(cursorLocation, 'image', downloadURL)
        })
      })
    }
  }
}
</script>

<style>
#writer .ql-editor {
  min-height: 500px;
}
</style>
