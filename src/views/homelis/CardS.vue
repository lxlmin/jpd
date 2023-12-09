<script>
import { Icon } from '@iconify/vue2';
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components:{
    Icon,
  }
};
</script>
<template>
  <div>
    <div class="flex items-center justify-between">
      <div>{{ title }}></div>
      <div><Icon icon="bytesize:ellipsis-vertical" /></div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>