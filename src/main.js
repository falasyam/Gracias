import '@babel/polyfill'
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import VueMeta from 'vue-meta'
import router from './router'
import store from '@/vuex/store'
import VueFirestore from 'vue-firestore'
import VueDisqus from 'vue-disqus'

Vue.use(VueFirestore)
Vue.use(VueDisqus)
Vue.use(VueMeta)
// Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  // Vuetify,
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
