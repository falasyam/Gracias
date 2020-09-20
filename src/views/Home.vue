<template>
    <section>
        <AppBar/>
        <section>        
            <v-responsive>
                <v-carousel cycle :show-arrows="false" hide-delimiters style="width:100%">
                    <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
            </v-responsive>        
        </section>
        <v-container>
            <v-row no-gutters>
              <v-col cols="12" class="text-sm-center text-md-center text-lg-center pa-3">
                <div class="py-4"></div>
                <span class="display-1 font-weight-bold">About Gracias</span>
                <div class="py-2"></div>
              </v-col>
              <v-col cols="12" align="center" justify="center">
                <v-img src="https://i.ibb.co/jfWttcM/GRACIAS.png" alt="Gracias Logo" height="200px" width="200px"></v-img>
              </v-col>
              <v-col cols="12" md="12" lg="12" xs="12" sm="12" class="text-sm-center text-md-center text-lg-center">
                <span class="pa-6 font-weight-medium">
                  Gracias pertama kali di bentuk 27 Februari 2014. 
                  Gracias diambil dari bahasa Spanyol yang berarti "Terima Kasih". 
                  Gracias adalah wadah untuk para fans Gracia yang ingin memberikan support untuk Gracia, 
                  sebagai bentuk terima kasih karena Gracia selalu menginspirasi kita semua. 
                  Selain itu Gracias bisa juga diartikan sebagai Gracia's, 
                  yang artinya kami adalah milik Gracia, 
                  yang akan selalu menemani di setiap langkah Gracia dalam mencapai mimpi-mimpinya.
                </span>
                <div class="py-2"></div>
              </v-col>
              <v-col cols="12" class="text-sm-left text-md-center">
                <v-btn rounded color="#8e44ad" dark href="https://docs.google.com/forms/d/1BF-bxkR7xkbH2M5rEKvbPOX0rlQ2-PSyyoFM3fGj5X4/viewform">JOIN US</v-btn>
                <div class="py-4"></div>
              </v-col>
              <v-divider></v-divider>
            </v-row>
        </v-container>
        
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" class="text-sm-center text-md-center text-lg-center pa-3">
                <div class="py-3"></div>
                <span class="display-1 font-weight-bold">Latest News</span>
                <div class="py-2"></div>
            </v-col>
                <v-col cols="12" md="4" lg="4" v-for="(Post, idx) in Posts" :key="idx">
                  <v-card
                    hover
                    class="mx-auto"
                    max-width="344"
                    @click="viewPost(Post)"
                  >
                    <v-img
                      :src="Post.imgUrl"
                      height="200px"
                    ></v-img>
                    <v-card-title>
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
                <v-col cols="12" align="center" justify="center">
                  <div class="py-2"></div>
                  <span><router-link to="/blog" class="font-weight-bold purple--text">All News</router-link></span>
                </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" class="text-sm-center text-md-center text-lg-center pa-3">
                <div class="py-3"></div>
                <span class="display-1 font-weight-bold">Merchandise</span>
                <div class="py-2"></div>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <v-card
                class="mx-auto"
                max-width="344"
              >
                <v-img
                  src="https://i.ibb.co/jh51x4G/product01.jpg"
                  height="200px"
                ></v-img>
                <v-card-title>
                  T-Shirt #BeMyHero Edition
                </v-card-title>
                <v-card-subtitle>
                  Pre-Order hanya sampai tanggal 20 November 2019!
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn text href="https://www.instagram.com/p/B4bq83fBRKM/">Product Detail</v-btn>
                  <v-btn text color="purple" href="https://www.instagram.com/p/B4bqho3Bnrg/">Bonus</v-btn>
                </v-card-actions>
              </v-card>
              <div class="py-2"></div>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <v-card
                class="mx-auto"
                max-width="344"
              >
                <v-img
                  src="https://i.ibb.co/RbPd7qj/product02.jpg"
                  height="200px"
                ></v-img>
                <v-card-title>
                  Hoodie #DoItGetIt Edition
                </v-card-title>
                <v-card-subtitle>
                  Sebelum Pesan, Silahkan bertanya pada kolom komentar.
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn text href="https://www.instagram.com/p/B0x_lU8gUU3/">Product Detail</v-btn>
                </v-card-actions>
              </v-card>
              <div class="py-2"></div>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <v-card
                class="mx-auto"
                max-width="344"
              >
                <v-img
                  src="https://i.ibb.co/gr2wLNm/product03.jpg"
                  height="200px"
                ></v-img>
                <v-card-title>
                  T-Shirt #DoItGetIt Edition
                </v-card-title>
                <v-card-subtitle>
                  Sebelum Pesan, Silahkan bertanya pada kolom komentar.
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn text href="https://www.instagram.com/p/B0x_CvPAtFX/">Product Detail</v-btn>
                </v-card-actions>
              </v-card>
              <div class="py-2"></div>
              <!-- Product Lanjutnya Taroh diatas ini -->
              <div class="py-4"></div>
            </v-col>
          </v-row>
        </v-container>
        <section>
          <Footer/>
        </section>
    </section>
</template>

<script>
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'
import { firestore } from '@/firebase/firestore'
import { mapMutations } from 'vuex'
import * as types from '@/vuex/mutation_types'
import _ from 'lodash'

  export default {
    components: {
        AppBar,
        Footer
    },
    data () {
      return {
        items: [
          {
            src: 'https://i.ibb.co/J50CCTN/Gracias500showgre.jpg',
          },
          {
            src: 'https://i.ibb.co/zHkyWBs/gracias.jpg',
          },
          {
            src: 'https://i.ibb.co/vP41rDY/20200905-175420.jpg',
          },
          {
            src: 'https://i.ibb.co/JcQbJ5y/20200905-180233.jpg',
          },
          {
            src: 'https://i.ibb.co/gJCpCz2/20200905-180129j.jpg',
          },
          {
            src: 'https://i.ibb.co/VgWQkwJ/20200905-180129h.jpg',
          },
        ],
      }
    },
    firestore () {
    return {
      Posts: firestore
        .collection('Post')
        .where('show', '==', true)
        .orderBy('date', 'desc')
        .limit(3)
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
        'length': 60
      })
    }
  }
}
</script>

<style scoped>
  .gambar {
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 10+, Firefox on Android */    
   -webkit-filter: grayscale(100%);
   -moz-filter: grayscale(100%);
   -ms-filter: grayscale(100%);
   filter: grayscale(100%);
   filter: gray; /* IE 6-9 */
  }
  .gambar:hover {
   -webkit-filter: none;
   -moz-filter: none;
   -ms-filter: none;
   filter: none;
  }

  a {
    text-decoration: none;
  }
</style>