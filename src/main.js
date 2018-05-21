import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import 'babel-polyfill'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
