<template>
  <div class="about" :style="{minHeight: minHeight + 'px'}">
    <span>blog demo base on node+express+mongodb+vue2.x+muse-ui+rem+less</span>
  </div>
</template>

<script>
import setMinHeight from '@/common/js/util.js'
export default {
  data () {
    return {
      minHeight: 0
    }
  },
  mounted () {
    setMinHeight(this, 104)
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/style/variable.less');
  .about {
    font-size: @font-size;
  }
</style>
