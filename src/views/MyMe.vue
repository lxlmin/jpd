<template>
        <div class="pb-[12vw] bg-[#f1f1f1]">
            <!-- 导航-->
            <div class="relative">
                <div class="fixed  top-0 h-[10vw] w-[100vw] left-0 flex justify-between text-[4.2vw] pt-2 bg-[#f1f1f1] z-50">
                    <router-link to="/home">
                    <Icon icon="ph:arrow-left-light" :style="{ fontSize: '36px',marginLeft:'30px' }" />
                    </router-link>
                    <Icon icon="prime:search" :style="{ fontSize: '36px',marginRight:'10px'}"/>
                </div>
                <div class="h-[10vw]"></div> 
           
           
            <!--  -->
            <div class="w-[100vw]">
                <!-- 头像 -->
                <div class="h-[45vw] bg-white mt-[15vw] relative rounded-[3vw]">
                    <div class="rounded-full w-[30vw] h-[30vw] ml-[35%] absolute top-[-10vw]">
                        <Icon icon="carbon:user-avatar" color="pink" :style="{ fontSize:'30vw'}"/>
                    </div>
                    <div class=" h-[20vw] w-[100vw] absolute top-[23vw]">
                        <div class="text-center w-[60vw]  ml-[20vw] flex justify-between ">
                           <span class="text-[6.2vw]">{{username}}</span>
                           <span class="rounded-[3vw] bg-neutral-200 h-10 w-[20vw] pt-2">cvip续费</span>
                        </div>
                        <div class="w-[60vw] ml-[20vw] flex justify-around mt-2">
                           <span>1关注</span>|
                           <span>0粉丝</span>|
                           <span>Lv.1</span>
                        </div>
                    </div>
                </div>

                <!-- 2 -->
                <div class="h-[50vw] bg-white mt-[5vw] relative rounded-[3vw] pl-4 pt-2">
                    <div class="flex justify-around flex-wrap">
                        <div class="w-[22vw] h-[15vw] mb-5 flex flex-col justify-center items-center">
                            <Icon icon="lets-icons:video-fill" color="red" :style="{ fontSize:'10vw'}"/>
                           <span>最近播放</span>
                        </div>
                        <div class="w-[22vw] h-[15vw] flex flex-col justify-center items-center">
                            <Icon icon="raphael:download" color="red" :horizontalFlip="true" :style="{ fontSize:'10vw'}"/>
                           <span>本地下载</span>
                        </div>
                        <div class="w-[22vw] h-[15vw] flex flex-col justify-center items-center">
                            <Icon icon="ic:outline-cloud-download" color="red" :horizontalFlip="true" :style="{ fontSize:'10vw'}"/>
                           <span>云盘</span>
                        </div>
                        <div class="w-[22vw] h-[15vw] flex flex-col justify-center items-center">
                            <Icon icon="tabler:shopping-bag-check" color="red" :horizontalFlip="true" :style="{ fontSize:'10vw'}"/>
                           <span>已购</span>
                        </div>
                        <div class="w-[22vw] h-[15vw] flex flex-col justify-center items-center">
                            <Icon icon="octicon:people-16" color="red" :horizontalFlip="true" :style="{ fontSize:'10vw'}"/>
                           <span>我的好友</span>
                        </div>
                        <div class="w-[22vw] h-[15vw] flex flex-col justify-center items-center">
                            <Icon icon="ic:round-star" color="red" :horizontalFlip="true" :style="{ fontSize:'10vw'}"/>
                           <span>收藏和赞</span>
                        </div>
                        <div class="w-[22vw] h-[15vw] flex flex-col justify-center items-center">
                            <Icon icon="solar:play-stream-bold" color="red" :horizontalFlip="true" :style="{ fontSize:'10vw'}"/>
                           <span>我的播客</span>
                        </div>
                        <div class="w-[22vw] h-[15vw] flex flex-col justify-center items-center">
                            <Icon icon="heroicons:heart-20-solid" color="red" :horizontalFlip="true" :style="{ fontSize:'10vw'}"/>
                           <span>乐谜团</span>
                        </div>
                    </div>
                    <div class="text-center mt-6">
                         <span>+ 音乐应用</span>
                    </div>
                </div>

                <!-- 3 -->
                <div class="h-[25vw] bg-white mt-[5vw] relative rounded-[3vw] flex justify-around">
                   <div class="w-[50vw] h-[25vw] flex justify-between">
                       <div class="w-[25vw] h-[16vw] pt-2">
                          <Icon icon="solar:chat-square-like-bold" color="#ccc" :horizontalFlip="true" :style="{ fontSize:'23vw'}"/>
                       </div>
                       <div>
                          <p class="mt-5 text-sm">我喜欢的音乐</p>
                          <p class="text-sm">0首</p>
                       </div>
                   </div>
                   <div class="w-[28vw] h-[10vw] rounded-[5vw] bg-neutral-200 mt-8 pt-2 flex justify-around pl-3 pr-3">
                       <Icon icon="flat-color-icons:like-placeholder" color="#ccc" :horizontalFlip="true" :style="{ fontSize:'5vw'}"/>
                       <span class="text-sm">心动模式</span>
                   </div>
                </div>

              <!-- 4 -->
                <div>
                <div class="h-[10vw] w-[100vw] mt-[5vw] text-xl flex justify-around">
                    <span>创建歌单</span>
                    <span>收藏歌单</span>
                </div>
                <div class=" bg-white mt-1 relative rounded-[3vw] mb-5">
                    <div class="h-[10vw] w-[100vw]  flex justify-between pt-2">
                        <div class="pl-5">
                            <span>创建歌单</span>
                        </div>
                        <div class="flex justify-around w-[35vw]">
                            <Icon icon="mynaui:plus" color="#ccc" :horizontalFlip="true" :style="{ fontSize:'5vw'}"/>
                            <Icon icon="bytesize:ellipsis-vertical" :style="{ fontSize:'5vw'}"/>
                        </div>
                    </div> 
                    <!-- flex justify-between -->
                    <div>
                        <!-- 歌曲歌单 -->
                         <div class="mt-2 h-[20vw] w-[100vw] text-xl flex justify-around" v-for="item in arr" :key="item.id">
                            <div class="w-[70vw] h-[20vw]  flex justify-around">
                                <div class="w-[15vw] h-[15vw] bg-[#f1f1f1] mt-[2vw] rounded-[2vw]">
                                    <img :src="item.coverImgUrl" alt="" class="rounded-[2vw] w-[15vw] h-[15vw]">
                                </div>
                                <div class="w-[48vw] h-[15vw] pt-2">
                                    <span class="text-sm">{{item.name}}</span><br>
                                    <span class="text-sm">{{item.trackCount}}首</span>
                                </div>
                            </div>
                            <Icon icon="bytesize:ellipsis-vertical" :style="{ fontSize:'5vw'}"/>
                        </div>
                        <!--  -->
                        <div class="mt-2 h-[20vw] w-[100vw] text-xl flex justify-around">
                            <div class="w-[15vw] h-[15vw] bg-[#f1f1f1] mt-[-1vw] ml-[1vw] rounded-[2vw]">
                                <Icon icon="system-uicons:import" color="#ccc" :rotate="2" :horizontalFlip="true" :style="{ fontSize:'15vw'}"/>
                            </div>
                            <span class="w-[60vw] h-[15vw] pt-3">一键导入外部音乐</span>
                        </div>
                    </div>
                    
                </div>
                </div>

              <!-- 5 -->
                <div class="h-[30vw] mt-5 bg-white  rounded-[3vw]">
                    <div class="h-[10vw] w-[100vw] flex justify-between pt-2">
                        <div class="pl-5">
                            <span>收藏歌单</span>
                        </div>
                        <div class="pr-5">
                            <Icon icon="bytesize:ellipsis-vertical" :style="{ fontSize:'5vw'}"/>
                        </div>
                    </div> 
                    <div class="mt-2 h-[15vw] pt-8 flex justify-around text-center">
                        <span>暂无收藏的歌单</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
</template>

<script>
import {getUsersonglist,getUserid} from "@/service"
import { Icon } from '@iconify/vue2';
export default {
    components: {
		Icon,
	},
    data(){
        return{
            username:'',
            songname:'',
            songnum:'',
            songtu:'',
            arr:''
        }
    },
    async created(){
        // 用户信息
        const [errUserid, resUserid] = await getUsersonglist({
            uid:8092277718
        });
        if (errUserid) return alert(errUserid);
        this.username = resUserid.data.profile.nickname
        // console.log(this.username);
        // console.log(resUserid)

        // 创建歌单
        const [errUsersonglist, resUsersonglist] = await getUserid({
            uid:8092277718
        });
        if (errUsersonglist) return alert(errUsersonglist);
        console.log(resUsersonglist);
        this.arr = resUsersonglist.data.playlist

        //创建歌单的名字  data.playlist[1].name
        // this.songname=resUsersonglist.data.playlist.name
        //总数 data.playlist[1].trackCount
        // this.songnum=resUsersonglist.data.playlist.trackCount
        //封面图 data.playlist[1].coverImgUrl
        // this.songtu=resUsersonglist.data.playlist.coverImgUrl
    }
}
</script>

<style>

</style>