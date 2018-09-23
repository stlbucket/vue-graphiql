import Vue from 'vue'
import App from './App.vue'
import './plugins/vuera'
import 'graphiql/graphiql.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
