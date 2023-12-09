<template>
    <nav class="a2 pl-[3.9vw] pr-[3.4vw] h-[13.5vw] flex items-center justify-between">
        <div class="fixed top-0 h-[13.5vw] w-[100vw] left-0 z-[998] opacity-1 flex justify-between" style="background: transparent">
            <div class="flex items-center text-[4.2vw]">
                <Icon icon="ph:arrow-left-light" :style="{ fontSize: '36px',color:'#fff',marginLeft:'30px' }" />
                <div class="w-[42vw] h-[13.5vw] flex items-center overflow-hidden relative">
                    <div class="text-[4.2vw] text-[#fff] ml-[4.7vw] relative">歌单</div>
                </div>
            </div>
            <div class="flex items-center">
                <Icon icon="prime:search" :style="{ fontSize: '36px',color:'#fff',marginRight:'10px'}"/>
                <Icon icon="bytesize:ellipsis-vertical" :style="{ fontSize: '36px',color:'#fff' ,marginRight:'10px'}"/>
            </div>
        </div>    
    </nav>
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