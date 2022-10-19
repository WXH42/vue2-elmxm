<template>
  <div>
    <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model.number="user.account"
      name="账号"
      label="账号"
      placeholder="账号"
      :rules="[{ required: true, message: '请填写账号' }]"
    />
    <van-field
      v-model="user.password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>

  </div>
</template>

<script>
import login from '@/login/index.js'
export default {
  // 登录界面
  name: 'elm-login',
  data () {
    return {
      user: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(login.datalogin(this.user))
    }
  }
}
</script>

<style>

</style>
