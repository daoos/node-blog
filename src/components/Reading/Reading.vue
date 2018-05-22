<template>
  <div class="reading" :style="{minHeight: minHeight + 'px'}">
    Reading
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
  .reading {
    font-family: @font-family;
    font-size: @font-size;
  }
</style>
