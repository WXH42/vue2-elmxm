// 处理登录的模块

import login from '@/login/login.js'

function datalogin (data) {
  console.log('已经进入datalogin')
  const p = login.loginUser(data)
  if (p !== 0) {
    return p
  }
}
export default {
  datalogin
}
