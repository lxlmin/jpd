<template>
    <div class="relative h-[100vh] pb-[12vw] bg-[#acacac]">
        <div class="absolute z-[3] flex flex-wrap h-[100%] pb-[7.5vw]">
            <!-- 头部 -->
            <div class="h-[15vw] w-[100vw] flex items-center px-[4vw] justify-between">
                <router-link to="/pre">
                    <div>
                       <Icon icon="ri:arrow-up-s-line" color="white" :rotate="2" :style="{fontSize:'30px'}"/>
                    </div>
                </router-link>
                    
                
                
                <div class="text-center w-[60vw]">
                   <router-link to="/pre">
                    <p class="h-[5vw] text-[4vw] text-[#fff] line-clamp-1">
                        <!-- 谁家 -->
                        {{mixin_player.currentTrackDetail?.name}}
                    </p>
                    <p class="text-[2.8vw] text-[#e0dbdb] mt-[2vw] font-[400]">
                        <!-- 池鱼 -->
                        {{ mixin_player.currentTrackDetail?.ar?.map(({ name }) => name).join("/")}}
                        <span class="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]">
                            关注
                        </span>
                    </p>
                    </router-link>
                </div>
                <Icon icon="solar:share-linear" color="white" :style="{fontSize:'30px'}"/>
            </div>
            <!-- 歌碟 -->
            <div  class="relative top-[1%] w-[100vw] h-[120vw] ">
                <div @click="move"
                    class="absolute top-[10%] left-[50%] translate-x-[-50%] z-[10] rotated w-[30vw] h-[40vw]"
                    style="transform: rotate(-10deg);"
                    >
                    <img data-v-8298fe8a="" src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png" alt=""
                        class="h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]"   v-if="fagle">
                     <img data-v-8298fe8a="" src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png" alt=""
                        class="h-[40vw] absolute top-[-3.2vw] left-[10.9vw]" v-else>
                </div>
                
                <div
                    class="w-[80vw] h-[80vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%]">
                    <div data-v-8298fe8a="" class="absolute w-[80vw] h-[80vw]">
                            <img 
                            src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                            alt="" class="absolute top-0 w-[80vw] h-[80vw]"> 
                            <img data-v-8298fe8a=""
                            src="https://admirable-jalebi-ce44af.netlify.app/static/disc_light.png" alt=""
                            class="w-[80vw] h-[80vw] absolute top-0">
                    </div>
                    <img data-v-8298fe8a="" :src="mixin_player.currentTrackDetail?.al?.picUrl" 
                        alt=""
                        id="imgs"
                        class="w-[50vw] h-[50vw] absolute top-[15vw] left-[15vw] rounded-[50%] border-[5px] border-[#000] rotateAnimation1">
                </div>
            </div>

            <!-- 功能 -->
            <div class="w-[100vw] flex justify-evenly items-center">
                <div>
                    <Icon icon="ph:heart-bold" color="white" :style="{fontSize:'20px'}"/>
                </div>
                <Icon icon="icons8:down-round" color="white" :style="{fontSize:'20px'}"/>
                <Icon icon="octicon:people-24" color="white"  :style="{fontSize:'20px'}"/>
                <router-link to="/re">
                    <Icon icon="majesticons:chat-text-line" color="white" :style="{fontSize:'20px'}"/>
                </router-link>
                <Icon icon="mingcute:more-2-fill" color="white"  :style="{fontSize:'20px'}"/>
            </div>
            <!-- 进度条 -->
            <div class="h-[8vw] w-[100vw] flex items-center px-[5vw] mt-[3vw]">
                <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-80">00:00</div>
                <div class="flex-1 mx-[2.5vw] vue-slider vue-slider-ltr" style="padding: 7px 0px; width: auto; height: 4px;">
                    <!-- <van-progress 
                         inactive 
                     /> -->
                    <!--  -->
                </div>
                <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-50">03:19</div>
            </div>
            <!-- 播放部分 -->
            <div class="h-[12.3vw] flex w-[100vw] items-center justify-evenly pl-3">
                <Icon icon="cil:loop" color="white" :style="{fontSize:'20px'}"/>
                <Icon icon="fluent:previous-20-filled" color="white" :style="{fontSize:'20px'}"/>
              
            <div class="w-[12vw] h-[12vw] rounded-[50%] bg-[#fff] flex items-center justify-center">
                <span @click="mixin_player.toggle()">
                  <Icon 
                  :icon="mixin_player.playing ? 'ic:sharp-pause' : 'ph:play-fill'"
                  class="text-xl"/>
                </span> 
            </div> 
            <Icon icon="fluent:previous-20-filled" color="white" :rotate="2" :style="{fontSize:'20px'}"/>     
            <div class="w-[12vw]">
                <van-cell  @click="showPopup" :style="{ background:'transparent'}">
                    <Icon icon="fontisto:play-list" class="text-[5vw] text-[#ffffff]"/>
                </van-cell>
            </div>
            <van-popup 
                v-model="show"  
                position="bottom"
                :style="{ height: '60%' }"
                round
                >
                <div class="rounded-t-[20px] px-[5.4vw]">
                  <div class="sticky top-0 z-50 left-0 bg-white py-[6vw]">
                      <h1 class="text-[4vw] font-extrabold">
                          当前播放
                          <span class="text-[2vw] text-[#929293]">{{songcont.length}}</span>
                      </h1>
                      <div class="flex justify-between mt-[6.6vw] items-center">
                          <div class="flex">
                              <Icon icon="icon-park-outline:loop-once" class="text-[6vw] text-[#B1B1B1]"/>
                              <h1 class="ml-[1.5vw] text-[3.4vw] font-medium">列表循环</h1>
                          </div>
                          <div class="flex w-[30vw] justify-between">
                              <Icon icon="material-symbols-light:download" class="text-[6vw] text-[#B1B1B1]"/>
                              <Icon icon="fluent:collections-20-regular" class="text-[6vw] text-[#B1B1B1]" />
                              <Icon icon="fluent-mdl2:delete" class="text-[6vw] text-[#B1B1B1]"/>
                          </div>
                      </div>
                   </div>

                    <div>
                     <!--  -->
                      <div v-for="item in songcont" :key="item.id" class="flex justify-between items-center h-[14vw]">
                          <div class="flex items-center"  >
                              <div class="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] flex items-center justify-center">
                                  <img src="https://admirable-jalebi-ce44af.netlify.app/static/wave.gif" class="red-image w-[2vw] h-[2vw]" alt="">
                              </div>
                              <div 
                                class="text-[4.1vw] ml-[2vw] w-[60vw] line-clamp-1"
                                >
                                  <span class="px-[1vw] rounded-[3px] border-[1px] border-[red] font-[400] text-[3vw] text-[red] text-center leading-[6vw] scale-50"  v-if="item.originCoverType==1">
                                      vip
                                  </span>
                                  <span class="px-[0.5vw] rounded-[3px] border-[1px] border-[red] text-[3vw] text-[red] text-center leading-[6vw] scale-50 ml-[1vw] mr-[1vw]"  v-if="item.originCoverType==1">
                                      试听
                                  </span>
                                  {{item.name}}
                                  <span class="text-[3vw] text-[#BCBCBC]">-
                                    {{ item.ar[0].name}}
                                  </span>
                              </div>
                          </div>
                          <div>
                              <Icon icon="iwwa:delete" class="text-[5vw] text-[#B1B1B1]"/>
                          </div>
                      </div>
                      <!--  -->
                  </div>
              </div>
              <div class="h-[30vw]"></div>
            </van-popup>

            
            
        </div>
        <!--  -->
         



    </div>
</div>
</template> 

<script>
import { Icon } from '@iconify/vue2';
import { mapState }  from 'vuex'
import player from '@/components/AudioPlay/player';
export default {
	components: {
		Icon,
	},
    data(){
        return{
            fagle:'ture',
            arr:'',
            show: false,
            currentRate: 0,
        }

    },
   
    player(){
        return player
    },
    methods:{
        move(){
            const img = document.getElementById('imgs');
            if (this.fagle) {
                img.classList.remove('rotating');
                
            }else{
                img.classList.add('rotating');
            }
            this.fagle = !this.fagle;
        },
        showPopup() {
          this.show = true;
        },
    },
    computed: {
    ...mapState(['songcont'])
  },
  created(){
    console.log(this.songcont);
  }
}
</script>

<style scoped>
.rotating {
    animation: rotate 2s linear infinite;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
</style>