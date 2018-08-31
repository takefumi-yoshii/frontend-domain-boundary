import Vue from 'vue'
import { store } from './store'
import App from './views/AppProvider.vue'

new Vue({
  el: '#vue',
  store,
  render: h => h(App)
})
