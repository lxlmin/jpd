<template>
    <div class="w-[100%]">
        <van-sticky>
            <van-button type="primary" class="w-[100%]">
                <div class="h-[25vw] pl-3 pr-3"></div>
            </van-button>
        </van-sticky>
        <div class="flex items-center mt-2 pl-3 pr-3">
            <div id="imgs" class="w-[10vw] h-[10vw] relative flex items-center justify-center rotateAnimation paused-animation">
                <img src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="" class="absolute top-0 left-0 z-[1]">
                <img :src="mixin_player.currentTrackDetail?.al?.picUrl" alt="" class="w-[7vw] h-[7vw] rounded-[50%]">
            </div>
            <router-link to="/ind">
            <div class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]">
                <span class="text-[#3E485E]">
                    <!-- {{musicName}} -->
                    fhgfhjj
                    {{mixin_player.currentTrackDetail?.name}}
                    </span>
                <span class="text-[#7B8591]">------
                    <!-- {{author}} -->
                    dfbgjhgj
                    {{ mixin_player.currentTrackDetail?.ar?.map(({ name }) => name).join("/")}}
                </span>
            </div>
            </router-link>
        </div>
        <van-tabs class="h-[200vw]" offset-top=12vw sticky>
            <van-tab title="评论区" disabled title-style="color:#000"></van-tab>
            <!--1  -->
            <van-tab title="推荐" title-style="left:20vw">
                <div class="bg-red-100 pl-3 pr-3 pt-2 flex justify-between">
                    <div class="h-[16vw] w-[65vw] flex justify-between">
                        <div class="w-[16vw] h-[16vw] bg-lime-300 rounded-[50%]">
                            <img src="" alt="" class="w-[16vw] h-[16vw] rounded-[50%]">
                        </div>
                        <div class="w-[46vw] h-[16vw]">
                        <div class=" flex justify-between pt-2">
                            <h3>多个efg</h3>
                            <div class="w-[12vw] h-[4.5vw] bg-neutral-500 rounded-[10vw]">
                                <div class="text-[3vw] text-center">cvip·贰</div>
                            </div>
                            <div class="w-[12vw] h-[4.5vw] bg-cyan-200 rounded-[10vw]">
                                <div class="text-[3vw] text-center">乐迷</div>
                            </div>
                        </div>
                        <p class="pt-1 text-[#ccc] text-[3.5vw]">
                            <span>1334</span>&nbsp;
                            <span>广东</span>
                        </p>
                        </div>
                    </div>
                    <div class="pt-1">
                        <span>23</span>&nbsp;
                        <span>@</span>
                    </div>
                </div>
                <div class="ml-[22vw] w-[78vw] border-b-2 pt-2 pr-3 pb-2">
                    fvfdfuifiudfiudfreufuhrhfhdhfuife
                    <p>sdvfdg</p>
                </div>
            </van-tab>

            
            <van-tab title="最热" title-style="left:13vw">
                内容 2
            </van-tab>
             
            
            <van-tab title="最新" title-style="left:6vw">
                内容 3
            </van-tab>
        </van-tabs>
        <div class="sticky bottom-0 h-[14vw] border-t-2 z-50">
            <input type="text" placeholder="听了这么多。可能你有话想说" class="w-[80vw] h-[10vw] rounded-[10vw] bg-zinc-300 ml-[5vw] mt-4 pl-5">&nbsp;
            <span class="text-[#ccc] text-[5vw]">发送</span>
        </div>
    </div>
</template>

<script>
import {getsongpl} from '@/service'
export default {
    data() {
        return {
        container: null,
        };
    },
    mounted() {
        this.container = this.$refs.container;
    },
    async created(){
        const [err, res] = await getsongpl({
            id:this.$route.query.id,
        });
        if (err) return alert(err);
           console.log(res);
    },
}
</script>

<style>

</style>