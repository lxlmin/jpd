<template>
       <div class="flex h-30 flex-row text-center">
          <router-link to="home" class="flex-1 w-20  flex flex-col justify-center items-center">
            <Icon icon="solar:vinyl-record-bold" class="text-3xl pt-2"/>
            首页
          </router-link>
          <router-link to="rank" class="flex-1 w-20  flex flex-col justify-center items-center">
            <Icon icon="icon-park-outline:ranking" class="text-3xl pt-2"/>
            排行榜
          </router-link>
          <router-link to="my" class="flex-1 w-20 flex flex-col justify-center items-center">
            <Icon icon="streamline:song-recommendation" class="text-3xl pt-2"/>
            我的
          </router-link>
          <router-link to="action" class="flex-1 w-20 flex flex-col justify-center items-center">
            <Icon icon="iconoir:user-love" class="text-3xl pt-2"/>
            关注
          </router-link>
          <router-link to="community" class="flex-1 w-20 flex flex-col justify-center items-center">
            <Icon icon="et:chat" class=" text-3xl pt-2"/>
            社区
          </router-link>  
      </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default{
  name:'FooFoo',
  components:{
    Icon
  }
}


</script>

<style lang="less">
    .active{
      color: red;
    }

</style>