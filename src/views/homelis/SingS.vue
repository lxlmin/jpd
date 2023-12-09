<template>
    <Card :title="resource.uiElement.subTitle.title"  class=" w-[100vw] overflow-hidden mb-6 ml-[2vw] mt-[1vw]  text-2xs-800 h-[75vw] pr-5"> 
      <Scroll class="mt-[1vw]" >
      <div class="flex overflow-hidden mt-[10px]"
        :style="{ width: `${this.resource.creatives.length * 70}vw` }">
        <div class=" dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] h-[90vw] scroll-item bg-[#fff] mr-[2vw] rounded-[3vw] pt-[2vw]  bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]" v-for="creative in this.resource.creatives" :key="creative.id">
          <div v-for="resources in creative.resources" :key="resources.id" class="w-[70vw] h-[10vw] mt-[2vw] mb-[9vw] ml-[3vw] ">
            <div class="flex">
                <img :src="resources.uiElement.image.imageUrl" alt="" class="w-[16vw]  h-[16vw] rounded-[8px]">
                <div class="text-[3vw] ml-[3vw]">
                  <span>{{ resources.uiElement.mainTitle.title }}</span>
                  <p class="text-[2vw] text-gray-400" v-if="resources.uiElement.subTitle">{{ resources.uiElement.subTitle.title }}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Scroll>
  </Card>
</template>

<script>
import Card from '@/views/homelis/CardS.vue';
import Scroll from "@/components/scllor.vue";
export default {
  components: { Card,Scroll },
  props: {
      resource: {
      type: Object,
      required: true,
      },
  },
  created() {
    console.log(this.resource.creatives)
  },
}
</script>

<style scoped>
img{
border-radius: 12px;
}

</style>