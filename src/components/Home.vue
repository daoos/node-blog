<template>
  <div class="home">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import VHeader from '@/components/Common/Header'
export default {
  created () {
    this.$router.push({
      path: '/Home/Reading'
    })
  },
  components: {
    VHeader
  }
}
</script>

<style scoped>

</style>
