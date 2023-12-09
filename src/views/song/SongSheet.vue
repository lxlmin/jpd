<template>
   <div>
       <div class="pb-[12vw]">
            <!-- 第一部分 -->
            <div class="h-[80vw] transition-all duration-20 0 relative bg-gradient-to-br from-[#486D8D] to-[#6186AB] pb-[5vw] pl-[3.9vw] pr-[3.4vw] pt-[3.5vw]">
                <!-- 头部 -->
               <NavigAtion></NavigAtion>
                
                <!-- 中间雷达 -->
                <div class="transition-all fade-in">
                  <PersonalCenter></PersonalCenter>
                </div>

                <!-- 评论 -->
                <DisCuss></DisCuss>
              
            </div>


            <!-- 第二部分 -->
            <SongReco></SongReco>
         
        </div>

        <!-- footrt -->
        <FooterFt></FooterFt>
       

   </div>
  

</template>

<script>
import NavigAtion from '@/views/song/songlist/NavigAtion.vue'
import PersonalCenter from '@/views/song/songlist/PersonalCenter.vue'
import DisCuss from '@/views/song/songlist/DisCuss.vue'
import SongReco from '@/views/song/songlist/SongReco.vue'
import FooterFt from '@/views/song/songlist/FooterFt.vue'
export default {
   components:{
      NavigAtion,
      PersonalCenter,
      DisCuss,
      SongReco,
      FooterFt,
   }
}
</script>

<style>

</style>