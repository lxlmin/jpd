<template>
    <div class="w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-between items-center">
        <van-cell @click="showPopup" :style="{background:'transparent'}">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
            role="img" width="10vw" height="10vw" viewBox="0 0 24 24" class="dark:text-[#e8eaf2] text-[#3A455B] iconify iconify--majesticons">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h12M6 12h12M6 16h12"/></svg>
        </van-cell>
        <van-popup 
        v-model="show"
        position="left" 
        :style="{ height: '100%' }"> 
          <MaskList></MaskList>
            
        </van-popup>
        
        <div class="relative">
                <label for>
                <input type="text" placeholder="Love Is Gone (Acoustic)" class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]">
                </label>
                <!-- 图 -->
            
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" class="absolute left-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"></path>
                </svg>
            
                <!-- 图 -->
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" class="absolute right-[3.68vw] top-[3vw] w-[4.47vw] h-[4.47vw] text-[#8189A1] iconify iconify--tabler">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7V6a2 2 0 0 1 2-2h2M4 17v1a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v1m-4 13h2a2 2 0 0 0 2-2v-1M5 12h14"></path>
                </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
        role="img" width="8vw" height="8vw" viewBox="0 0 24 24" class="dark:text-[#e8eaf2] text-[#3A455B] iconify iconify--material-symbols">
        <path fill="none" stroke="currentColor"  d="m5 10l-.95-2.05L2 7l2.05-.95L5 4l.95 2.05L8 7l-2.05.95L5 10Zm13-3l-.625-1.375L16 5l1.375-.625L18 3l.625 1.375L20 5l-1.375.625L18 7Zm2 4l-.625-1.375L18 9l1.375-.625L20 7l.625 1.375L22 9l-1.375.625L20 11Zm-8 4q-1.25 0-2.125-.875T9 12V6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6v6q0 1.25-.875 2.125T12 15Zm0-6Zm-1 13v-3.075q-2.6-.35-4.3-2.325T5 12h2q0 2.075 1.463 3.538T12 17q2.075 0 3.538-1.463T17 12h2q0 2.625-1.7 4.6T13 18.925V22h-2Zm1-9q.425 0 .713-.288T13 12V6q0-.425-.288-.713T12 5q-.425 0-.713.288T11 6v6q0 .425.288.713T12 13Z"/></svg>
    </div>
</template>

<script>
import MaskList from './MaskList.vue'
export default {
    data() {
        return {
        show: false,
        };
  },
  components:{
     MaskList
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
}


</script>

<style>

</style>