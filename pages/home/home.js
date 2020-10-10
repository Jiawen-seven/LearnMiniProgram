//getApp()获取App()产生的示例对象
const app = getApp()
const name = app.globalData.name
const age = app.globalData.age
console.log(name+age)

//注册一个页面
Page({
  //注册page时做什么？
  //-----------------2.初始化一些数据，以方便被wxml引用展示-----------------
  data: {
    message: 'seven',
    list: []
  },
  //-----------------1.监听页面的生命周期，发送网络请求，从服务器获取数据-----------------
  //页面被加载出来
  onLoad(){
    console.log("onload")
    // wx.request({ //发送网络请求，从服务器获取数据
    //   url: 'http://152.136.185.210:8000/api/z8/recommend', //假设有一个接口
    //   success: (res) => { //这里使用箭头函数比较好
    //     const data = res.data.data.list;
    //     this.setData({
    //       list: data
    //     })
    //   }
    // })
  },
  //页面显示出来时
  onShow(){
    console.log("onshow")
  },
  //页面初次渲染完成时
  onReady(){
    console.log("onready")
  },
  //页面被隐藏时
  onHide(){
    console.log("onhide")
  },
  //页面被卸载时
  onUnload(){
    console.log("onunload")
  },

  //-----------------3.监听wxml中相关的一些事件-----------------
  handleGetUserInfo(event){
    console.log(event)
  },
  buttonclick(){
    console.log("我被点击了 哈哈哈")
  },

  //-----------------4.监听其他事件（滚动）-----------------
  //监听滚动事件
  onPageScroll(obj){
    console.log(obj)
  },
  //监听滚动到底部，可用作上拉加载更多。
  onReachBottom(){
    console.log("我到底部啦")
  },
  //监听下拉刷新
  onPullDownRefresh(){ //需要再home.json文件设置一下"enablePullDownRefresh": true
    console.log("下拉刷新")
  }
})