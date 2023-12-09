<template>
  <div id="app"  :class="{dark:isDark}">
    <router-view></router-view>
    <FooFoo></FooFoo>
  </div>

    
</template>

<script>
import FooFoo from '@/components/FooFoo'
import {mapState} from 'vuex' 
export default {
  name: 'App',
  components: {
    FooFoo
  },

  created() {
    this.$store.dispatch("requestHomePageData");
    this.$store.dispatch("requestHomepageDragonBall");
    // this.$store.dispatch("requestLoginCellphone");
  },
  computed:{
    ...mapState(['isDark'])
  }
}
</script>

