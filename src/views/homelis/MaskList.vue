<template>
<div class="bg-[#f1f1f1]">
   <!-- 1 -->
   <div class="dark:bg-[#151515] flex justify-between items-center h-[16vw] px-[5vw] w-[76vw] bg-[#f1f1f1] fixed top-0 z-50">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <div class="w-[7vw] h-[7vw] rounded-[50%] mr-[2vw] bg-[#f4f4f1] flex items-center justify-center overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" class="text-[#f9dada] w-[7vw] h-[7vw] iconify iconify--gridicons">
                        <path fill="currentColor" d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 16s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2"></path>
                    </svg>
                </div> 
                <router-link to="/longin">
                    <span class="dark:text-[#f0f0f0] text-[#383838] text-[3.5vw]">
                        立刻登录
                    </span> 
                </router-link>
               <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
            </div>
        </div> 
        <div>
           <Icon icon="nimbus:qr-code" :style="{ fontSize: '14px'}"/>
        </div>
    </div>
    <div class="h-[16vw]"></div>
   

  <!-- 2 -->
   <div class="mx-auto w-[76vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px] mt-2">
        <div class="h-[10vw] flex justify-between items-center">
            <h1 class="text-[3.6vw] text-[#ffeeeb]">开通黑胶VIP</h1> 
            <div class="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]">会员中心</div>
        </div> 
        <div class="h-[7vw] border-b-[1px] border-[#494443]">
            <p class="text-[2.73vw]">点击恢复超21项专属特权</p>
        </div> 
        <div class="h-[11vw] leading-[11vw] flex justify-between items-center mr-[4.45vw]">
            <div class="text-[2.5vw] h-[11vw]">受邀专享，黑胶VIP低至0.27元/天!</div> 
            <div class="scale-50 w-[8vw]">
                <div class="w-[22vw] h-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[8vw] scale-50">受邀专享</div>
            </div>
        </div>
    </div> 


    <!-- 3 -->
    <div class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]">
        <div class="px-[4vw]">
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                      <Icon icon="iconamoon:email-thin" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">我的消息</span>
                </div> 
                <div>
                   <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="cib:shell" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">云贝中心</span>
                </div> 
                <div class="flex items-center">
                    <span class="text-[color:#a7a7a7] text-[3vw]">签到</span>
                    <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                  <Icon icon="humbleicons:bulb" :rotate="2" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">创作者中心</span>
                </div> 
                <div>
                  <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
        </div>
    </div>


    <!-- 4 -->
    <div class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]" style="pointer-events: auto;">
        <div class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]">音乐服务
        </div> 
        <div class="px-[4vw]">
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                   <Icon icon="iconoir:bright-star" :style="{ fontSize: '14px'}"/>
                <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">趣测</span>
                </div> 
                <div class="flex items-center">
                    <span class="text-[color:#a7a7a7] text-[3vw]">点击查看今日运势</span> 
                    <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="ion:ticket-outline" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">云村有票</span>
                </div> 
                    <div>
                     <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                    </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="iconamoon:question-mark-square-light" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">多多西西口袋</span>
                </div> 
                <div>
                    <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                   <Icon icon="mdi:shopping-outline" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">商城</span>
                </div> 
                <div>
                  <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                   <Icon icon="icon-park-outline:electrocardiogram" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">Beat专区</span>
                </div> 
                <div class="flex items-center">
                    <span class="text-[color:#a7a7a7] text-[3vw]">顶尖制作邀你创作</span> 
                    <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                   <Icon icon="tabler:bell-ringing-2" :style="{ fontSize: '14px'}"/>
                   <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">口袋彩铃</span>
                </div> 
                <div>
                   <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="mingcute:game-1-line" :style="{ fontSize: '14px'}"/>
                   <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">游戏专区</span>
                </div> 
                <div>
                    <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
        </div>
    </div>

    <!-- 5 -->
    <div class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]" style="pointer-events: auto;">
        <div class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]">其他</div> 
        <div class="px-[4vw]">
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="uil:setting" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">设置</span>
                </div> 
                <div> 
                    <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="line-md:moon-loop" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">深色模式</span>
                </div> 
                <!-- 深色模式 -->
                <div class="flex items-center">
                    <div class="relative inline-block mr-2 align-middle select-none transition duration-200 ease-in">
                        <div class="switch">
                            <van-switch v-model="isDark" size="16px"  active-color="red" inactive-color="#ccc"/>
                        </div>
                    </div>
                </div>
                <!-- 深色模式 -->
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                   <Icon icon="wpf:alarm-clock" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">定时关闭</span>
                </div> 
                <div>
                    <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="map:clothing-store" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[rgb(240,240,240)] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">个性装扮</span>
                </div> 
                <div>
                   <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                   <Icon icon="icon-park-outline:headset" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">边听边存</span>
                </div> 
                <div class="flex items-center">
                    <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span> 
                    <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="icon-park-outline:headset" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">在线听歌免流量</span>
                </div> 
                <div> 
                   <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                   <Icon icon="material-symbols-light:list-alt-outline" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">音乐黑名单</span>
                </div> 
                <div>
                    <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                   <Icon icon="ph:prohibit" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">青少年模式</span>
                </div> 
                <div class="flex items-center">
                    <span class="text-[color:#a7a7a7] text-[3vw]">未开启</span> 
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="wpf:alarm-clock" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">音乐闹钟</span>
                </div> 
                <div>
                  <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
        </div>
    </div>

    <!-- 6 -->
    <div class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]" style="pointer-events: auto;">
        <div class="px-[4vw]">
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                   <Icon icon="streamline:task-list" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">我的订单</span>
                </div> 
                <div>
                  <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="ion:ticket-outline" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">优惠券</span>
                </div> 
                <div>
                  <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="icon-park-outline:headset" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">我的客服</span>
                </div> 
                <div> 
                   <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="ri:share-circle-fill" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">分享网易云音乐</span>
                </div> 
                <div>
                    <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="line-md:document-list" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">个人信息收集与使用清单</span>
                </div> 
                <div>
                   <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="mdi:link-box-outline" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">个人信息第三方共享清单</span>
                </div> 
                <div>
                   <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="solar:share-circle-outline" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">个人信息与隐私保护</span>
                </div> 
                <div>
                   <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                <div class="flex items-center">
                    <Icon icon="material-symbols:privacy-tip-outline" :style="{ fontSize: '14px'}"/>
                    <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">关于</span>
                </div> 
                <div class="flex items-center">
                    <Icon icon="fluent:ios-arrow-24-filled" :rotate="2" :style="{ fontSize: '14px'}"/>
                </div>
            </div>
        </div>
    </div>


    <!--7 -->
    <div class="dark:bg-[#2c2c2c] h-[12vw] px-[3.6vw] bg-[#fff] w-[76vw] mt-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw] text-[#ef4239]" style="pointer-events: auto;">
        <div>关闭云音乐</div>
    </div>
</div>

      
</template>

<script>
import { Icon } from '@iconify/vue2';
// import { mapMutations } from 'vuex';
export default {
    components: {
		Icon,
	},
    data() {
        return {
            // checked: true,
        };
    },
    computed:{
        isDark:{
            get(){
              return this.$store.state.isDark
            },
            set(value){
                this.$store.commit("changeDark",value)
            }
        }
    }
    // methods:{
    //      ...mapMutations( ['deleteCachedData']),
    // }
   
}
</script>

<style>

</style>