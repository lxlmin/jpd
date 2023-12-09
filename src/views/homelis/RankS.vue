<script>
import CardS from './CardS.vue'
import Scroll from '@/components/scllor.vue';
export default {
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  created(){
    console.log(this.resource);
  },
  components:{
    CardS,
    Scroll
  }
};
</script>
<template>
<CardS :title="resource.uiElement.subTitle.title" class="dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800] pl-3 pr-3">
    <Scroll class="w-[98vw] h-[46vw] overflow-hidden scroll-wrapper">
     <div
       class="flex "
       :style="{ width: `${this.resource.creatives.length * 35}vw` }">
       <div v-for="creative in this.resource.creatives" :key="creative.id" class=" mr-[1vw] relative overflow-hidden mt-5 rounded-2xl">
         <img
           class="w-[30vw] h-[30vw] overflow-hidden rounded-2xl"
           :src="creative.resources.resourceExtInfo.artists.img1v1Url"
           alt=""
         />
         <div class="text-[2.5vw] w-[30vw]" >{{ creative.uiElement.mainTitle.title }}</div>
       </div>
     </div>
    </Scroll>
 </CardS>
</template>