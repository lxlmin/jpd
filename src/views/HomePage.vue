<template>
   <div>
      <div class="h-[100vh] overflow-auto">
         <div class="dark:from-[#2c1a2b] dark:to-[#1a1c23] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2">
            <TopModel></TopModel>
            <!-- 轮播 -->
            <CarouSel></CarouSel>
         </div>   
         <div class="dark:bg-[#1a1c23] bg-[#f1f1f1] h-[210vw]">
            <SimilarR></SimilarR>
            <BlockMid v-for="block in blocks" :resource="block" :key="block.id"></BlockMid>
         </div>
      </div>
   </div>
</template>

<script>
import BlockMid from "./homelis/blockMid.vue";
// import { getHomePageData, getHomepageDragonBall } from "@/service";
import TopModel from '@/views/homelis/TopModel.vue'
import CarouSel from '@/views/homelis/CarouSel.vue'
import SimilarR from '@/views/homelis/SimilarR.vue'
import { mapState } from "vuex"
// import RecoMmende from '@/views/homelis/RecoMmende.vue'
export default {
   components:{
    TopModel,
    CarouSel,
    SimilarR,
    BlockMid,
   },
   data() {
    return {
      // blocks: [],
      // menus: [],
    }
  },
  computed:{
      ...mapState(['blocks']) 
  },
//   async created() {
//    //首页数据
//     const [errorHomePageData, homePageData] = await getHomePageData();
//     if (!errorHomePageData) this.blocks = homePageData.data.data.blocks
//     console.log(this.blocks);
//     //推荐歌单
//     const [errorHomepageDragonBall, homepageDragonBall] =
//       await getHomepageDragonBall();
//     if (!errorHomepageDragonBall) this.menus = homepageDragonBall.data.data;
//    //  console.log(this.menus);
//   },
}
</script>

<style>

</style>