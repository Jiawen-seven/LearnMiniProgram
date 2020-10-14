const TOKEN = 'token';
App({
  globalData: {
    token: ''
  },
  onLaunch() {
    //1.先从缓存中取出token
    const token =wx.getStorageSync(TOKEN)
    //2.判断token是否有值
    if(token && token.length !== 0){//已经有token
      //验证token是否过期
      wx.request({
        url: 'http://123.207.32.32:3000/auth',
        method: 'post',
        header: {
          token
        },
        success: (res) => {
          // console.log(res)
          if(!res.data.errCode){ //如果token没过期
            // console.log('token有效')
            this.globalData.token = token;//重新进来的时候globaldata中的token会被初始化为空，所以这里要赋值。
          }else{ //过期
            //重新登录
            this.login();
          }
        },
        fail: (res) => {
          console.log(res)
        }
      })
    }else{ //没有token
      //进行登录操作
      this.login();
    }
  },
  login(){
    //登录操作
    wx.login({
      success: (res) => {
        // console.log(res)
        //1.获取code
        const code = res.code;
        // console.log(code)
        //2.发送code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data:{
            code
          },
          success: (res) =>{
            //1.取出token
            const token = res.data.token;
            //2.将token保存到globalData中
            this.globalData.token = token;
            //3.进行本地存储（同步）
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})
