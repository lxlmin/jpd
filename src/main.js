import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import maincss from '@/assets/main.css'
import FooFoo from '@/components/FooFoo'
import { Icon } from '@iconify/vue2';

import Vant from 'vant';
import '@/plugins/vant'
import 'vant/lib/index.css';

import AudioPlay from '@/components/AudioPlay'
Vue.use(AudioPlay);


Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  maincss,
  component:{
    Icon,
    FooFoo,
  }
}).$mount('#app')
