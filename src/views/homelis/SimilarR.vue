<template>
  <!-- Swiper -->
        <!-- <div class="swiper mySwiper w-[92vw] mx-auto overflow-hidden scroll-wrapper h-[21vw] bg-[#7dea7d] mt-3 mb-3">
            <div class="swiper-wrapper flex w-[190vw] mx-auto overflow-hidden h-[21vw] scroll-content">
                <div class="swiper-slide w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw] bg-[#ead87d] overflow-hidden">
                    <div v-for="item in banners" :key="item.bannerId">
                        <img :src="item.pic" alt="" class="w-[18vw]"> 
                        <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">每日推荐</p>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- Swiper -->
        <div class="swiper mySwiper w-[92vw] mx-auto overflow-hidden scroll-wrapper h-[21vw]  ml-3 mb-3">
            <div class="swiper-wrapper flex w-[190vw] mx-auto overflow-hidden h-[21vw] scroll-content">
                <div class="swiper-slide w-[19vw] scroll-item flex items-center flex-wrap mr-[6vw] overflow-hidden">
                    <div class="pt-5  mr-2 w-[16vw]">
                        <Icon icon="bi:calendar-date-fill" :style="{ fontSize: '10vw',color:'red'}" class="ml-3"/>
                        <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[2vw]">每日推荐</p>
                    </div>
                     <div class="pt-5 mr-2 w-[16vw]">
                        <Icon icon="icon-park-solid:radio" :style="{ fontSize: '10vw',color:'red'}" class="ml-3 mb-3"/>
                        <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">私人FM</p>
                    </div>
                     <div class="pt-5  mr-2 w-[16vw]"> 
                        <Icon icon="streamline:play-list-5-solid" color="red" :style="{ fontSize: '10vw',color:'red'}" class="ml-3 mb-3"/> 
                        <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">歌单</p>
                    </div>
                    <div class="pt-5 mr-2 w-[16vw]">
                        <Icon icon="icon-park-outline:ranking" :style="{ fontSize: '10vw',color:'red'}" class="ml-3 mb-3"/> 
                        <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">排行榜</p>
                    </div> 
                     <div class="pt-5  mr-2 w-[16vw]">
                        <Icon icon="bxs:book" color="brown"  :style="{ fontSize: '10vw'}" class="ml-3 mb-3"/>
                        <p  class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">有声书</p>
                      </div>
                </div>
                 <div class="swiper-slide w-[19vw] scroll-item flex items-center justify-center flex-wrap mr-[6vw]">
                      <div class="pt-5  mr-2 w-[16vw]">
                        <Icon icon="iconamoon:music-album-fill" color="red" :style="{ fontSize: '10vw'}" class="ml-3 mb-3"/>
                        <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">数字专辑</p>
                    </div>
                     <div>
                        <img src="http://p1.music.126.net/2JvVZZjcjyCE72fGMsC1hg==/109951166989043011.jpg" alt="" class="w-[18vw]"> 
                        <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">直播</p>
                    </div>
                     <div>
                        <img src="http://p1.music.126.net/BAOWsqZmmxL8JIH-wejMmQ==/109951167294312390.jpg" alt="" class="w-[18vw]"> 
                        <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">关注新歌</p>
                    </div>
                    <div>
                        <img src="http://p1.music.126.net/gk99UFRasebERf38t6A1kA==/109951168168319514.jpg" alt="" class="w-[18vw]"> 
                        <p class="dark:text-[#bcbec5] text-[#666F7D] text-center text-[2.78vw] w-[100%] mt-[-2vw]">收藏家</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
// import Swiper from 'swiper'
// import 'swiper/css/swiper.min.css'
// import {getHomePageData} from "@/service"
//     export default {
//     updated() {
//         new Swiper ('.swiper-container', {
//             // direction: 'vertical', // 垂直切换选项
//             loop: true, // 循环模式选项
            
//             // 如果需要分页器
//             pagination: {
//             el: '.swiper-pagination',
//             },
            
//             // 如果需要前进后退按钮
//             navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//             },

//             // 自动切换
//             autoplay: {
//                 delay: 3000,
//                 stopOnLastSlide: false,
//                 disableOnInteraction: true,
//             },
            
//             // 如果需要滚动条
//             scrollbar: {
//             el: '.swiper-scrollbar',
//             },
//         })

//     },
//     data(){
//         return{
//             banners:[]
//         }
//     },
//     async created(){
//         const [err, res] = await getHomePageData({
//             type: 1,
//         });
//         console.log(getHomePageData);
//         if (err) return alert(err);
//         // const {data:{data:{blocks:[{extInfo:{banners}}]}}} = res
//         // this.banners = banners;
//         // console.log(this.banners);
//     }
// }
import { Icon } from '@iconify/vue2';
import 'swiper/css/swiper.css'  //引入swiper样式
    import Swiper from 'swiper';	//引入swiper
    export default {
        mounted(){
            new Swiper(".mySwiper", {
            pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            },
         });
        },
        components: {
            Icon,
        },  

    }
     

    //  const [errorHomepageDragonBall, homepageDragonBall] =
    //   await getHomepageDragonBall();
    // if (!errorHomepageDragonBall) this.menus = homepageDragonBall.data.data;
    // console.log(this.menus);
</script>


<style>

</style>