<script>
import Card from "./CardS.vue";
import Scroll from "@/components/scllor.vue";
export default {
  components: { 
    Card,
    Scroll,
    },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  
  }

</script>
<template>
<Card :title="resource.uiElement.subTitle.title" class="dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800] pl-3 pr-3">
 <Scroll class="w-[98vw] h-[46vw] overflow-hidden scroll-wrapper">
        <div class="flex"
          :style="{ width: `${this.resource.creatives.length * 70}vw` }">
          <div class="w-[90vw] h-[40vw] mt-4" v-for="creative in this.resource.creatives" :key="creative.id">
            <div v-for="resources in creative.resources" :key="resources.id" class="w-[70vw] h-[10vw] flex mt-3  mb-[3vw] rounded-xl">
                <img :src="resources.uiElement.image.imageUrl" alt="" class="w-[10vw] rounded-xl">
                <div class="text-[3vw] ml-[3vw]">
                  <span>{{ resources.uiElement.mainTitle.title }}</span>
                  <p class="text-[2vw] text-gray-400" v-if="resources.uiElement.subTitle">{{ resources.uiElement.subTitle.title }}</p>
                </div>
            </div>
          </div>
        </div>
    </Scroll>
 </Card>
  
</template>