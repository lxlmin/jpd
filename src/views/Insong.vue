<template>
    <div class="relative h-[130vh] pb-[12vw] bg-[#e7cfc5]">
        <div class="absolute z-[3] flex flex-wrap h-[100%] pb-[7.5vw]">
            <!-- 头部 -->
            <div class="h-[15vw] w-[100vw] flex items-center px-[4vw] justify-between">
                <div>
                    <Icon icon="ri:arrow-up-s-line" color="white" :rotate="2" :style="{fontSize:'30px'}"/>
                </div>
                <div class="text-center w-[60vw]">
                    <p class="h-[5vw] text-[4vw] text-[#000] line-clamp-1">没有理由</p>
                    <p class="text-[2.8vw] text-[#666666] mt-[2vw] font-[400]">杨胖雨
                        <span class="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]">
                            关注
                        </span>
                    </p>
                </div>
                <Icon icon="solar:share-linear" color="white" :style="{fontSize:'30px'}"/>
            </div>
            <!-- 歌碟 -->
            <div  class="relative top-[2%] w-[100vw] h-[120vw]">
                <div data-v-8298fe8a=""
                    class="absolute top-[10%] left-[50%] translate-x-[-50%] z-[10] rotated w-[30vw] h-[40vw]"
                    style="transform: rotate(-10deg);">
                    <img data-v-8298fe8a="" src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png" alt=""
                        class="h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]">
                </div>
                <div data-v-8298fe8a=""
                    class="w-[80vw] h-[80vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%]">
                    <div data-v-8298fe8a="" class="absolute w-[80vw] h-[80vw]">
                        <img data-v-8298fe8a=""
                            src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                            alt="" class="absolute top-0 w-[80vw] h-[80vw]"> <img data-v-8298fe8a=""
                            src="https://admirable-jalebi-ce44af.netlify.app/static/disc_light.png" alt=""
                            class="w-[80vw] h-[80vw] absolute top-0">
                    </div>
                    <img data-v-8298fe8a="" src="https://p1.music.126.net/hzs4pVOxFKS5J64nY-rugA==/109951165958851914.jpg"
                        alt=""
                        class="w-[50vw] h-[50vw] absolute top-[15vw] left-[15vw] rounded-[50%] border-[5px] border-[#000] rotateAnimation1">
                </div>
            </div>

            <!-- 功能 -->
            <div class="w-[100vw] mt-[1vw] flex justify-evenly items-center">
                <div>
                    <Icon icon="ph:heart-bold" color="white" :style="{fontSize:'20px'}"/>
                </div>
                <Icon icon="icons8:down-round" color="white" :style="{fontSize:'20px'}"/>
                <Icon icon="octicon:people-24" color="white"  :style="{fontSize:'20px'}"/>
                <Icon icon="majesticons:chat-text-line" color="white" :style="{fontSize:'20px'}"/>
                <Icon icon="mingcute:more-2-fill" color="white"  :style="{fontSize:'20px'}"/>
            </div>
            <!-- 进度条 -->
            <div class="h-[8vw] w-[100vw] flex items-center px-[5vw] mt-[3vw]">
                <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-80">00:00</div>
                <div class="flex-1 mx-[2.5vw] vue-slider vue-slider-ltr" style="padding: 7px 0px; width: auto; height: 4px;">
                    <!--  -->
                    <div class="vue-slider-rail">
                        <div class="vue-slider-process" style="height: 100%; top: 0px; left: 0%; width: 0%; transition-property: width, left; transition-duration: 0s;">
                        </div>
                        <div aria-valuetext="0" class="vue-slider-dot" role="slider" aria-valuenow="0" aria-valuemin="0"
                            aria-valuemax="199.8" aria-orientation="horizontal" tabindex="0"
                            style="width: 14px; height: 14px; transform: translate(-50%, -50%); top: 50%; left: 0%; transition: left 0s ease 0s;">
                            <div class="vue-slider-dot-handle"></div>
                        </div>
                    </div>
                    <!--  -->
                </div>
                <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-50">03:19</div>
            </div>
            <!-- 播放部分 -->
            <div class="h-[12.3vw] flex w-[100vw] items-center justify-evenly">
                <Icon icon="cil:loop" color="white" :style="{fontSize:'20px'}"/>
                <Icon icon="fluent:previous-20-filled" color="white" :style="{fontSize:'20px'}"/>
            <div class="w-[12vw] h-[12vw] rounded-[50%] bg-[#fff] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true" role="img" width="20px" height="20px" viewBox="0 0 32 32"
                    class="iconify iconify--carbon">
                    <path fill="currentColor"
                        d="M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z">
                    </path>
                </svg>
            </div> 
            <Icon icon="fluent:previous-20-filled" color="white" :rotate="2" :style="{fontSize:'20px'}"/>     
            <Icon icon="fontisto:play-list" color="white" :style="{fontSize:'20px'}"/>
        </div>
        <!--  -->
    </div>
</div>
</template> 

<script>
import { Icon } from '@iconify/vue2';
import {gesongUrl} from '@/service'
export default {
	components: {
		Icon,
	},
    async created(){
        const [err, res] = await gesongUrl({
            id:this.$route.query.id,
            level: "standard" 
        });
        if (err) return alert(err);
          console.log(res);
    },
};
</script>

<style scoped></style>