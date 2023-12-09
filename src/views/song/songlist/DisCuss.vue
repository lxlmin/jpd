<template>
    <div class="flex items-center mt-[2.5vw]">
        <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
        <!--  -->
        <Icon icon="ion:arrow-redo-sharp" :style="{ fontSize: '36px',color:'#fff'}" />
            88万
        </div>
        <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 mx-[3vw] text-[#f8fefe] text-[3vw]">
        <!--  -->
        <Icon icon="humbleicons:chat" :style="{ fontSize: '36px',color:'#fff'}"/>
        104万
        </div>
        <div class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#ff2658] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
        <!--  -->
        <Icon icon="fluent:star-add-20-filled" :style="{ fontSize: '36px',color:'#fff'}"/>
        3630万
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
    components: {
		Icon,
	},
}
</script>

<style>

</style>