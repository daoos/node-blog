<template>
  <div class="writing" :style="{minHeight: minHeight + 'px'}">
    <div class="content">
      <div class="input">
        <span>标题：</span>
        <mu-text-field hintText="最多不超过10个字符" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="10"/><br/>
        <span>内容：</span>
        <mu-text-field hintText="不允许超过100个字符" :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow" multiLine :rows="3" :rowsMax="6" :maxLength="100"/><br/>
      </div>
      <mu-raised-button label="发表" class="demo-raised-button" primary/>
    </div>
  </div>
</template>

<script>
import setMinHeight from '@/common/js/util.js'
export default {
  data () {
    return {
      minHeight: 0,
      input: '',
      inputErrorText: '',
      multiLineInput: '',
      multiLineInputErrorText: ''
    }
  },
  mounted () {
    setMinHeight(this, 104)
  },
  methods: {
    handleInputOverflow (isOverflow) {
      this.inputErrorText = isOverflow ? '已经超出字数限制！！！！' : ''
    },
    handleMultiLineOverflow (isOverflow) {
      this.multiLineInputErrorText = isOverflow ? '已经超出字数限制！！！！' : ''
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/style/variable.less');
  .writing {
    font-family: @font-family;
    font-size: @font-size;
    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      .input {
        span {
          display: block;
          width: 100%;
          text-align: left;
          font-size: @font-size;
          color: #7e57c2;
          font-weight: normal;
        }
      }
    }
  }
</style>
