import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.socketTask = null

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
