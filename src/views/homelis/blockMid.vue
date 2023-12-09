<script>
import RecoMmende from "./RecoMmende.vue";
import NewSing from "./NewSing";
import RankS from "./RankS";
import SingS from "./SingS"
const blocksTypeComponentMap = {
  HOMEPAGE_BLOCK_PLAYLIST_RCMD: RecoMmende,
  HOMEPAGE_BLOCK_STYLE_RCMD: NewSing,
  HOMEPAGE_BLOCK_MGC_PLAYLIST: RankS,
  HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG:SingS
};

export default {
  name: "blockMid",
  data() {
    return {
      blocksTypeComponentMap,
    };
  },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
   <component
    :is="blocksTypeComponentMap[resource.blockCode]"
    :resource="resource"
   />
</template>