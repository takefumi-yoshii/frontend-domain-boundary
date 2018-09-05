import Vue from 'vue'
import { store } from './store'
import App from './views/AppProvider.vue'

// ______________________________________________________

export function renderVue() {
  new Vue({
    el: '#vue',
    store,
    render: h => h(App)
  })
}
