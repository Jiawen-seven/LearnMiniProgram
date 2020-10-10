//注册App时做什么？(以下主要说常用的三点)
App({ //会产生一个示例对象
  //小程序初始化
  onLaunch: function (options) {
    //给onLaunch添加options参数，也可以判断小程序的进入场景。
    console.log(options)
    //获取用户信息
  },
  //小程序界面显示
  onShow: function (options) {
    //1.判断小程序的进入场景,根据不同进入场景,页面呈现不同。
    console.log(options)
    switch (options.scene) {
      case 1001:
        break;
      case 1005:
        break;
      default:
        break;
    }

    //2.监听生命周期函数，执行对应的业务逻辑，如：获取用户信息
    //2.1 获取用户信息————方法一
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      }
    })
    //2.2 获取用户信息————方法二
    // 使用button组件，将open-type改成getUserInfo，并绑定bindgetuserinfo事件去获取。
    // 在home页面中可查看

    //2.3 获取用户信息————方法三（该方法只能用于展示）
    //使用内置组件open-data，具体请看home页面
  },
  //小程序被隐藏
  onHide: function () {
    
  },
  //小程序出错
  onError: function (msg) {
    
  },
  //3.因为App()实例只有一个，并且是全局共享的（单例对象），
  //所以可以存放一些共享数据。
  globalData: {
    name: 'seven',
    age: 18
  }
})
