<template>
  <div>
    <!-- Swiper -->
      <div class="swiper-container swiperCarou w-[95vw] h-[37vw] m-[auto] rounded-[3vw] text-center bg-red-100 ml-2">
        <div class="swiper-wrapper">
            <div class="swiper-slide w-[100%] h-[100%]" v-for="item in banners" :key="item.bannerId" >
                <img :src="item.pic" class="w-[100%] h-[100%]">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {getHomePageData} from "@/service"
    export default {
    updated() {
        new Swiper ('.swiperCarou', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },

            // 自动切换
            autoplay: {
                delay: 1000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            
        })

    },
    data(){
        return{
            banners:[]
        }
    },
    async created(){
        const [err, res] = await getHomePageData({
            type: 0,
        });
        if (err) return alert(err);
        const {data:{data:{blocks:[{extInfo:{banners}}]}}} = res
        this.banners = banners;
        // console.log(this.banners);
    }
}

</script>

<style>

</style>