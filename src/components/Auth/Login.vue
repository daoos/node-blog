<template>
  <div class="login">
    <v-header></v-header>
    <div class="content">
      <div class="info">
        <mu-text-field hintText="请输入用户名" v-model="username"/><br/>
        <mu-text-field hintText="请输入密码" type="password" v-model="password"/><br/>
      </div>
      <mu-raised-button label="登录" class="demo-raised-button" primary @click="doLogin"/><br>
      <mu-flat-button label="没有账号？立即注册" class="demo-flat-button" primary @click="toRegister"/>
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/Common/Header'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    doLogin () {
      console.log(this.username)
      console.log(this.password)
    },
    toRegister () {
      this.$router.push('/Register')
    }
  },
  components: {
    VHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .login {
    width: 100%;
    height: 100%;
  }
  .content {
    padding-top: 2.5rem;
    text-align: center;
    .mu-text-field-input {
      background: #fff;
    }
    button {
      font-size: 0.4rem;
    }
  }
</style>
