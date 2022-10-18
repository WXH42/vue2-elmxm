<template>
  <div class="bottom_bar-root">
    <van-tabbar route>
      <van-tabbar-item replace to="/index" icon="shop-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/member" icon="diamond-o">会员</van-tabbar-item>
      <van-tabbar-item replace to="/order" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  // 底部tab栏
  name: 'elm_bar'
}
</script>

<style scoped lang="less">

</style>
