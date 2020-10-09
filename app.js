App({
  //小程序初始化完成时会执行
  onLaunch: function () { //初始化后，两小时内再次进入小程序不会重新初始化，因为后台会存活两小时。
    console.log("小程序初始化完成~")
    //获取用户信息，因为是异步调用，所以会比onShow慢。
    wx.getUserInfo({
      //数据拿到之后，再进行回调。
      success: function(res){
        console.log(res)
      }
    })

    //抛出一个错误来测试onError函数。
    // setTimeout(() => {
    //   const err = new Error()
    //   throw err
    // },3000)
  },
  //小程序界面显示出来之后会执行
  onShow: function (options) {
    console.log("小程序界面显示完成~")
  },
  //界面被隐藏时会执行
  onHide: function () {
    console.log("界面被隐藏时会执行~")
  },
  //小程序中发生了一些错误时会执行
  onError: function (msg) {
    console.log("小程序发生错误时会执行~")
  }
})
