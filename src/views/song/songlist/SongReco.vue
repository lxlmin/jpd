<template>
       <div class="bg-[#fff] w-[100vw] rounded-[15px] relative z-[1] mt-[-2.5vw] px-[3.8vw]">
                <nav class="h-[13vw] flex items-center justify-between">
                    <div class="flex items-center">
                        <Icon icon="carbon:play-filled" :style="{ fontSize: '34px',color:'red' }"/>
                        <span class="text-[#25272C] text-[3.7vw] ml-[3.9vw] mr-[2.3vw]">播放全部</span>
                        <span class="text-[#8C9094] text-[2.7vw]">(34)</span>
                    </div>
                    <div class="flex items-center">
                        <Icon icon="system-uicons:push-down" :style="{ fontSize: '34px',marginRight:'30px'}"/>
                        <!-- 图标 -->
                        <Icon icon="solar:list-down-outline" :style="{ fontSize: '34px'}"/>
                    </div>
                </nav>

                <!-- 歌曲表 -->
                <div>
                    <router-link to="/sheets,query:{id:this.resource.creatives.id}">
                        <div class="flex items-center h-[14vw] bg-red-400">
                            <div class="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] font-medium"></div>
                                <div class="font-medium text-[3.6vw] w-[64vw]">
                                    <div class="text-[3.6vw] text-ellipsis overflow-hidden whitespace-nowrap w-[50vw] text-[#949797]">
                                        <span class="text-ellipsis text-[#000]"></span>
                                        <span class="text-[#949797]">["我每天问一百次"]</span>
                                    </div>
                                    <div class="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw] flex items-center">
                                        <span>ZAVIS-异地恋</span>
                                    </div>
                                </div>
                            <div class="flex justify-between w-[40vw]">
                                <!-- 图标 -->
                                <Icon icon="akar-icons:video" :style="{ fontSize: '36px',color:'#fff'}" />
                                <!-- 图标 -->
                                <Icon icon="bytesize:ellipsis-vertical" :style="{ fontSize: '36px',color:'#fff',marginRight:'10px'}"/>
                            </div>
                       </div>
                    </router-link>
                </div>
            </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
// import {getplaylisttrackall} from "@/service"
export default {
    components: {
		Icon,
	},
    data(){
        return{
           resource:''
        }
    },
   
    // async created(){
    //     const [err, res] = await getplaylisttrackall({
    //         id:this.$route.query.id
    //     });
    //     console.log(res);
    //     if (err) return alert(err);
    // }
}
</script>

<style>

</style>