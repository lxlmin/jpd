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
import * as Sentry from "@sentry/vue";


import AudioPlay from '@/components/AudioPlay'
Vue.use(AudioPlay);


Vue.use(Vant);


Vue.config.productionTip = false


Sentry.init({
  Vue,
  dsn: "https://15b5ed6e3f037e01a2a5ca8e80b71ccd@o4506386918932480.ingest.sentry.io/4506387205062656",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: [],
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});


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
