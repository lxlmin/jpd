<template>
    <div class="buPmeF pb-[5vw]">
        <div class="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101]  text-[4.2vw] font-[600]">
            MV排行榜
        </div>
        <div>
            <van-tabs v-model="active" sticky animated>
                <van-tab  v-for="(item,index) in mvarr" :key="index" :title="mvarr[index].data[0].mv.area">
                    <div class="overflow-auto px-[4vw] h-[76vh]">
                        <div class="w-[92vw] mt-5" v-for="(arr_item,indexs) in item.data" :key="arr_item.id" :arrlst='arr'>
                            <router-link :to="{ path: '/vio', query: {id:arr_item.id,name:arr_item.name,artistName:arr_item.artistName} }">
                            <div class="w-[100%] h-[52vw] relative">
                                <img :src="arr_item.cover" alt="" class=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]">
                                <div class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center">
                                    <Icon icon="tabler:triangle-filled" color="white" :rotate="1" />
                                    {{arr_item.playCount}}
                                </div>
                            </div>
                            </router-link>
                            <div class="h-[15vw] flex items-center flex-wrap">
                                <div class="flex h-[5vw] w-[100vw]">
                                    <span class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">
                                       {{indexs+1}}
                                    </span>
                                    <span class=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">
                                        {{arr_item.name}}
                                    </span>
                                </div>
                                <div class="flex h-[4vw] items-center">
                                    <div class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center">-</div>
                                    <div class=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                                        <span>
                                                {{arr_item.artistName}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--  -->
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import {getMv} from '@/service/index'
import { Icon } from '@iconify/vue2';
export default {
    data() {
        return {
          active: 0,
          arr:['内地','港台','欧美','韩国','日本'],
          mvarr:[],
        };
    },
    components:{
        Icon,
    },
    
    async created() {
        for(let i = 0 ; i<this.arr.length;i++){
            const [errn, resn] = await getMv({
               area:this.arr[i]
            })
            if (errn) return alert(errn)
            // console.log(res);
            this.mvarr.push(resn.data) 
        }
        console.log(this.mvarr[0].data[0].artistName);
    }  
  }

</script>

<style>

</style>