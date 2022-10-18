<template>
  <div>
    <router-view></router-view>
    <bottomBar></bottomBar>
  </div>
</template>

<script>
import bottomBar from '@/components/bottom_bar/index.vue'
export default {
  components: {
    bottomBar // 底部tab栏
  }
}
</script>

<style>

</style>
