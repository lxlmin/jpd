<template>
     <div class="h-[35]">
        <!-- 雷达 -->
        <div class="h-[35]" v-if="flag">
            <section class="h-[29vw] flex pt-[1.6vw] justify-between">
                <div class="w-[24vw] h-[25vw] pt-[1vw] relative">
                    <img src="http://p1.music.126.net/J5Gf2W1XSuwOS0gegA9ryA==/109951168645398914.jpg" alt="" class="w-[24vw] h-[24vw] rounded-[10%] relative z-[2]">
                </div>
                <div class="w-[67vw] pr-[12vw]">
                    <div class="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800] flex justify-between w-[67vw]">
                        <span>私人雷达</span>
                        <div  @click="dianji">
                           <Icon icon="ei:arrow-up"  :style="{ fontSize: '22px',color:'#fff'}"/>
                        </div>
                    </div>
                    <div class="h-[10.5vw] flex items-center">
                        <img src="http://p1.music.126.net/4ZjO1oj0WTeN5U19FpnQFw==/109951165005238078.jpg" alt="" class="w-[6vw] h-[6vw] rounded-[50%]">
                        <span class="text-[2.73vw] ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50">云音乐私人雷达</span>
                        <span class="px-[2vw] py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50 bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]">
                            + 关注
                        </span>
                    </div>
                </div>
            </section>
            <p class="h-[4vw] flex items-center w-[90vw] overflow-hidden mt-[3.8vw] justify-between">
                <span class="text-[#fff] opacity-50 text-[2.8vw] whitespace-nowrap w-[83vw] overflow-hidden">
                    你爱的歌，值得反复聆听私人雷达，每日更新，收藏你的最爱
                </span>
            </p>

        </div>
        <!-- 歌单列表 --> 
        <div class=" h-[35]" v-else>
            <div class="h-[10vw] w-[100vw] flex items-center text-[#fff] opacity-50 text-[3vw]">
                <div>喜欢这个歌单的用户也听了</div>
                <div  class=" ml-[50vw]" @click="dians">
                    <Icon icon="ei:arrow-up"  :style="{ fontSize: '22px',color:'#fff',marginRight:'10px'}"/>
                </div>
            </div>
            <div class="w-[95vw] scroll-wrapper overflow-hidden">
                <div class="flex w-[160vw]">
                    <div class="w-[28vw] mr-[2.5vw]">
                        <div class="w-[28vw] h-[28vw] rounded-[8px] overflow-hidden relative pt-[1vw]">
                            <img src="http://p2.music.126.net/Pz2sDgWC-m7733Jp2ATBZA==/109951164573695512.jpg" alt="" class="w-[28vw] h-[28vw] rounded-[8px] relative z-[1]">
                            <div class="dark:bg-[#272727] w-[26vw] h-[28vw] bg-opacity-20 bg-[#fff] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"></div>
                        </div>
                        <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#fff] mt-[2vw] scroll-item">
                            「嗨爆」在宿舍御用的蹦迪歌曲
                        </p>
                    </div>
                      <div class="w-[28vw] mr-[2.5vw]">
                        <div class="w-[28vw] h-[28vw] rounded-[8px] overflow-hidden relative pt-[1vw]">
                            <img src="http://p2.music.126.net/4L--5jGuNNCdRxL10n_0-g==/19057835044326350.jpg" alt="" class="w-[28vw] h-[28vw] rounded-[8px] relative z-[1]">
                            <div class="dark:bg-[#272727] w-[26vw] h-[28vw] bg-opacity-20 bg-[#fff] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"></div>
                        </div>
                        <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#fff] mt-[2vw] scroll-item">
                            华语百首 | 回忆伤人无声，唱不尽世间遗憾
                        </p>
                    </div>
                      <div class="w-[28vw] mr-[2.5vw]">
                        <div class="w-[28vw] h-[28vw] rounded-[8px] overflow-hidden relative pt-[1vw]">
                            <img src="http://p2.music.126.net/1gNcBmzdIaQtU00Dvp_TvQ==/109951163912081772.jpg" alt="" class="w-[28vw] h-[28vw] rounded-[8px] relative z-[1]">
                            <div class="dark:bg-[#272727] w-[26vw] h-[28vw] bg-opacity-20 bg-[#fff] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"></div>
                        </div>
                        <p class="dark:text-[#e3e5ec] text-[2.78vw] text-[#fff] mt-[2vw] scroll-item">
                            好听到单曲循环
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
    </div>

</template>

<script>
import { Icon } from '@iconify/vue2';
// import {getPlayist} from "@/service"
export default {
    data(){
       return{flag:true}
    },
    components: {
		Icon,
	},
     props: {
    resource: {
      type: Object,
      required: true,
    },
  },
    methods:{
        dianji(){
            this.flag=false;
        },
        dians(){
            this.flag=true
        }
    },
    // async created(){
    //     const [err, res] = await getPlayist({
    //         id:1
    //     });
    //     if (err) return alert(err);
    //     console.log(res.data.playlist.tracks);
        // const {data:{data:{blocks:[{extInfo:{banners}}]}}} = res
        // this.banners = banners;
        // console.log(this.banners);
    // }

   
}
</script>

<style>

</style>