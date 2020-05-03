import Vue from 'vue'
import VueMq from 'vue-mq';
import App from './App.vue'
import router from './router'
import ToggleButton from 'vue-js-toggle-button'

Vue.config.productionTip = false

Vue.use(ToggleButton)

Vue.use(VueMq, {
  breakpoints: {
    sm: 630,
    util: 959,
    lg: Infinity,
  },
  defaultBreakpoint: 'desktop',
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
