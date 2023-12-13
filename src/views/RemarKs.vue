<template>
    <div class="w-[100%] h-[200vw]">
        <van-sticky>
            <van-button class="w-[100%]">
                <div class="h-[15vw] w-[100vw] pl-3 pr-3 pt-4 flex justify-between">
                    <router-link to="/ind">
                        <Icon icon="ph:arrow-left"  class="text-[7vw] text-[#000]"/>
                    </router-link>
                    <div class="text-[5vw] text-[#000]">
                        <span>
                            评论
                            <span>({{cont}})</span>
                        </span>
                    </div>
                    <div class="w-[25vw] flex justify-between">
                        <Icon icon="fluent:star-add-24-regular" class="text-[7vw] mr-[1vw] text-[#000]" />
                        <Icon icon="bytesize:ellipsis-vertical" class="text-[7vw] mr-[1vw] text-[#000]"/>
                    </div>
                </div>
            </van-button>
        </van-sticky>
        <div class="flex items-center mt-2 pl-3 pr-3">
            <div id="imgs" class="w-[14vw] h-[14vw] relative flex items-center justify-center rotateAnimation paused-animation">
                <img src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="absolute top-0 left-0 z-[1]">
                <img :src="mixin_player.currentTrackDetail?.al?.picUrl" alt="" class="w-[10vw] h-[10vw] rounded-[50%]">
            </div>
            <router-link to="/ind">
            <div class="text-[4vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]">
                <span class="text-[#3E485E]">
                    <!-- {{musicName}} -->
                    {{mixin_player.currentTrackDetail?.name}}
                    </span>
                <span class="text-[#7B8591]">------
                    <!-- {{author}} -->
                    {{ mixin_player.currentTrackDetail?.ar?.map(({ name }) => name).join("/")}}
                </span>
            </div>
            </router-link>
        </div>
        <van-tabs class="h-[200vw]" offset-top=11vw sticky>
            <van-tab title="评论区" disabled title-style="color:#000"></van-tab>
            <!--1  -->
            <van-tab title="推荐" title-style="left:20vw">
                <div v-for="item in this.hotComments" :key="item.commentId">
                     <div class=" pl-3 pr-3 pt-2 flex justify-between">
                    <div class="h-[16vw] w-[65vw] flex justify-between">
                        <div class="w-[12vw] h-[12vw]  rounded-[50%] bg-orange-300">
                            <img :src="item.user.avatarUrl" alt="" class="w-[12vw] h-[12vw] rounded-[50%]">
                        </div>
                        <div class="w-[46vw] h-[16vw]">
                        <div class=" flex justify-between pt-2 w-[46vw]">
                            <h4 class="text-[3vw]">{{item.user.nickname}}</h4>
                            <div class="w-[26vw] flex justify-between">
                                <div class="w-[12vw] h-[4.5vw] bg-neutral-500 rounded-[10vw]">
                                    <div class="text-[3vw] text-center">cvip·贰</div>
                                </div>
                                <div class="w-[12vw] h-[4.5vw] bg-cyan-200 rounded-[10vw]">
                                    <div class="text-[3vw] text-center">乐迷</div>
                                </div>
                            </div>
                           
                        </div>
                        <p class="pt-1 text-[#ccc] text-[3.5vw]">
                            <span>{{item.timeStr}}</span>&nbsp;
                            <span class="mt-6">{{item.ipLocation.location}}</span>
                        </p>
                        </div>
                    </div>
                    <div class="pt-1">
                        <span>23</span>&nbsp;
                        <span>👍</span>
                    </div>
                </div>
                <div class="ml-[22vw] w-[78vw] border-b-2 pt-2 pr-3 pb-2 text-[4vw]">
                    {{item.content}}
                </div>
                </div>
                
            </van-tab>

            
            <van-tab title="最热" title-style="left:13vw">
                <div v-for="item in this.hotComments" :key="item.commentId">
                     <div class=" pl-3 pr-3 pt-2 flex justify-between">
                    <div class="h-[16vw] w-[65vw] flex justify-between">
                        <div class="w-[12vw] h-[12vw]  rounded-[50%]">
                            <img :src="item.user.avatarUrl" alt="" class="w-[12vw] h-[12vw] rounded-[50%]">
                        </div>
                        <div class="w-[46vw] h-[16vw]">
                        <div class=" flex justify-between pt-2 w-[46vw]">
                            <h4 class="text-[3vw]">{{item.user.nickname}}</h4>
                            <div class="w-[26vw] flex justify-between">
                                <div class="w-[12vw] h-[4.5vw] bg-neutral-500 rounded-[10vw]">
                                    <div class="text-[3vw] text-center">cvip·贰</div>
                                </div>
                                <div class="w-[12vw] h-[4.5vw] bg-cyan-200 rounded-[10vw]">
                                    <div class="text-[3vw] text-center">乐迷</div>
                                </div>
                            </div>
                           
                        </div>
                        <p class="pt-1 text-[#ccc] text-[3.5vw]">
                            <span>{{item.timeStr}}</span>&nbsp;
                            <span class="mt-6">{{item.ipLocation.location}}</span>
                        </p>
                        </div>
                    </div>
                    <div class="pt-1">
                        <span>23</span>&nbsp;
                        <span>👍</span>
                    </div>
                </div>
                <div class="ml-[22vw] w-[78vw] border-b-2 pt-2 pr-3 pb-2 text-[4vw]">
                    {{item.content}}
                </div>
                </div>
            </van-tab>
             
            
            <van-tab title="最新" title-style="left:6vw">
               <div v-for="item in this.comments" :key="item.commentId">
                     <div class=" pl-3 pr-3 pt-2 flex justify-between">
                    <div class="h-[16vw] w-[65vw] flex justify-between">
                        <div class="w-[12vw] h-[12vw]  rounded-[50%]">
                            <img :src="item.user.avatarUrl" alt="" class="w-[12vw] h-[12vw] rounded-[50%]">
                        </div>
                        <div class="w-[46vw] h-[16vw]">
                        <div class=" flex justify-between pt-2 w-[46vw]">
                            <h4 class="text-[3vw]">{{item.user.nickname}}</h4>
                            <div class="w-[26vw] flex justify-between">
                                <div class="w-[12vw] h-[4.5vw] bg-neutral-500 rounded-[10vw]">
                                    <div class="text-[3vw] text-center">cvip·贰</div>
                                </div>
                                <div class="w-[12vw] h-[4.5vw] bg-cyan-200 rounded-[10vw]">
                                    <div class="text-[3vw] text-center">乐迷</div>
                                </div>
                            </div>
                           
                        </div>
                        <p class="pt-1 text-[#ccc] text-[3.5vw]">
                            <span>{{item.timeStr}}</span>&nbsp;
                            <span class="mt-6">{{item.ipLocation.location}}</span>
                        </p>
                        </div>
                    </div>
                    <div class="pt-1">
                        <span>23</span>&nbsp;
                        <span>👍</span>
                    </div>
                </div>
                <div class="ml-[22vw] w-[78vw] border-b-2 pt-2 pr-3 pb-2 text-[4vw]">
                    {{item.content}}
                </div>
                </div>
            </van-tab> 
             <div class="sticky bottom-0 h-[14vw] z-50">
            <input type="text" placeholder="听了这么多。可能你有话想说" class="w-[80vw] h-[10vw] rounded-[10vw] bg-zinc-300 ml-[5vw] mt-4 pl-5">&nbsp;
            <span class="text-[#ccc] text-[5vw]">发送</span>
        </div>
        </van-tabs>
       
    </div>
</template>

<script>
import {getsongpl} from '@/service'
import { Icon } from '@iconify/vue2';
export default {
    data() {
        return {
        container: null,
        comments:'',
        hotComments:'',
        cont:''
        };
    },
    methods:{
       fn(){
        alert(111)
       }
    },
    components:{
       Icon
    },
    mounted() {
        this.container = this.$refs.container;
    },
    async created(){
        const [err, res] = await getsongpl({
            id:this.mixin_player.currentTrackDetail.id,
        });
        if (err) return alert(err);
           console.log(res);
           console.log(res.data.comments);
           this.comments=res.data.comments
           this.hotComments =res.data.hotComments
           this.cont=res.data.total

           //图片 data.comments[0].user.avatarUrl
           //name data.comments[0].user.nickname
           //评论内容data.comments[0].content
           //地址 data.comments[0].ipLocation.location
           //时间  data.comments[2].timeStr

           //总评论  res.data.total

           //
    },
}
</script>

<style>

</style>