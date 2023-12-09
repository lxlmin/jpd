<template>
<Card :title="resource.uiElement.subTitle.title" class=" dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800] pl-3 pr-3">
  <Scroll class="cha w-[98vw] h-[46vw] pt-[1vw] overflow-hidden scroll-wrapper border-[#EBEDF2]">
    <div  :style="{ width: `${this.resource.creatives.length * 37}vw` }" class=" flex pl-[2vw] mb-3 mt-3">
      <div class="pt-[1vw]">
          <div class="swiper-container swiperReco w-[31vw] h-[31vw] m-[auto] rounded-[3vw] text-center ml-2">
            <div class="swiper-wrapper">
                <div class="swiper-slide w-[100%] h-[100%]" v-for="creative in this.resource.creatives" :key="creative.id" >
                    <img :src="creative.uiElement.image.imageUrl" class="w-[100%] h-[100%]">
                </div>
            </div>
          </div>
          <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#3E4759] scroll-item">快乐不在于事情 而在于我们</p>
      </div>
  
      <div class="w-[31vw] ml-[3vw] rounded-2xl" v-for="creative in this.resource.creatives" :key="creative.id">
          <router-link :to="{ path:'/pre?id='+creative.creativeId }">
              <img
                class="w-[31vw] h-[31vw] rounded-2xl"
                :src="creative.uiElement.image.imageUrl"
                alt=""
              />  
          </router-link>
          <div class="dark:text-[#e9ebf2]  text-[2.5vw]">{{ creative.uiElement.mainTitle.title }}</div>
      </div>
      
    </div>
    </Scroll>
 </Card>

</template>

<script>
import Card from "./CardS.vue";
import Scroll from "@/components/scllor.vue";
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  components: { 
    Card,
    Scroll
    },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  updated() {
        new Swiper ('.swiperReco', {
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            
            // 自动切换
            autoplay: {
                delay: 1000,
                stopOnLastSlide: false, //停止自动切换
                disableOnInteraction: true //*用户操作swiper之后,是否禁止
            },
        })

    },
  // mounted(){
  //     // console.log(this.resource);
  // },
  mounted(){
      console.log(this.resource.creatives.creativeId);
      console.log(1111);
  }
}

</script>