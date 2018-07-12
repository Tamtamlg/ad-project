import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as fb from 'firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDpHP5CaAErZf-gZRdDx9e9SjnxmbOQNMQ',
      authDomain: 'ads-vue-project.firebaseapp.com',
      databaseURL: 'https://ads-vue-project.firebaseio.com',
      projectId: 'ads-vue-project',
      storageBucket: 'ads-vue-project.appspot.com',
      messagingSenderId: '299083538396'
    })
  }
})
