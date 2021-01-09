import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import i18n from './i18n'
import VueMq from 'vue-mq'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'ionicons/dist/css/ionicons.min.css'
require('ionicons/dist/css/ionicons.min.css')
require('material-design-icons-iconfont/dist/material-design-icons.css')
 
/**
 * Please don' t remove this.
 * Artefact will use it to inject code
 */
//<= inject_package =>


window.$ = require('jquery');
window.JQuery = require('jquery')

Vue.config.productionTip = false


Vue.use(VueMq, {
  breakpoints: {
    xs: 600,
    sm: 960,
    md: 1264,
    lg: 1904,
    xl: 2204,
    default: Infinity,
  }
})


Vue.mixin({
  methods: {
    mqVal: function (values, breakP) {
      if(values[breakP] !== undefined){
        return values[breakP]
      } else {
        return values["default"]
      }
    },
  },
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
