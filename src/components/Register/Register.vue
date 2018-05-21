<template>
  <div class="register">
    <v-header></v-header>
    <div class="content">
      <div class="info">
        <mu-text-field hintText="请输入用户名" v-model="username"/><br/>
        <mu-text-field hintText="请输入密码" type="password" v-model="password"/><br/>
        <mu-text-field hintText="请再次输入密码" type="password" v-model="confirmPass"/><br/>
      </div>
      <mu-raised-button label="注册" class="demo-raised-button" primary @click="doRegister"/><br>
      <mu-flat-button label="返回登录" class="demo-flat-button" primary @click="toLogin"/>
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/Common/Header'
export default {
  data () {
    return {
      username: '',
      password: '',
      confirmPass: ''
    }
  },
  methods: {
    doRegister () {
      console.log(this.username)
      console.log(this.password)
      console.log(this.confirmPass)
    },
    toLogin () {
      this.$router.push('/Login')
    }
  },
  components: {
    VHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.register {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    text-align: center;
    .mu-text-field-input {
      background: #fff;
    }
    button {
      font-size: 0.4rem;
    }
  }
}
</style>
