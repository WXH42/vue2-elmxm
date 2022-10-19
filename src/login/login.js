
// 存用户对象
const user = [
  {
    name: 'root', // 用户名
    account: 123456789, // 账号
    password: 'root', // 密码
    phone_number: 123456789, // 电话号码
    token: 'root-123456789-123456789' // 此用户唯一标识 格式是  用户名-账号-电话号码
  }
]
// 注册函数
function register () {
  // 暂时不写
}
// 登录函数
function loginUser (userkey) {
  //  参数 user 为登录传入的对象
  console.log('已经进入loginUser')
  if (user.account === userkey.account && user.password === userkey.password) {
    return user.token
  } else {
    return 0
  }
}

// 导出用户对象
export default {
  loginUser, register
}
