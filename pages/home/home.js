//主要练习相关小程序系统API的知识点
import request from '../../service/network'
Page({
  data:{
    title: 'seven'
  },
  onLoad(options){
    // 一、原生的网络请求的方法 
    this.get_data_request();

    // 二、使用promise方法的网络请求(封装的思想)
    //4.网络请求的封装（封装是在service/network.js中）
    request({
      url: 'http://httpbin.org/post',
      data:{
        name: 'seven',
        age: 18
      },
      method: 'post',
    }).then(res => {
      console.log(res)  
    }).catch(res => {
      console.log(res)
    });
  },
  get_data_request(){
    // 1.网络请求的简单使用
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/w6/recommend',
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })

    // 2.网络请求中携带参数
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/w6/home/data',
    //   data:{
    //     type: 'sell',
    //     page: 1
    //   },
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })

    //3.网络请求中，post请求且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   data:{
    //     name: 'seven',
    //     age: 18
    //   },
    //   method: 'post',
    //   success: (res)=>{
    //     console.log(res)
    //   }
    // })
  },

  //三、展示弹窗
  buttonclick(){
    wx.showToast({
      title: 'seven',
    })

    // wx.showModal({
    //   title: 'seven',
    //   cancelColor: 'cancelColor',
    // })

    // wx.showLoading({
    //   title: 'title',
    // })
    // setTimeout(() => {
    //   wx.hideLoading({
    //     success: (res) => {
    //       console.log('让showLoading消失')
    //     },
    //   })
    // },1000)

    // wx.showActionSheet({
    //   itemList: ['转发','分享'],
    // })
  },

  //四、页面分享
  //1.使用生命周期函数
  onShareAppMessage(options){
    return{
      title: 'seven'
    }
  },
  //2.使用按钮分享
  //直接使用button中的open-type属性即可

  //五、登录流程(登录可以直接在app.js中做！)
  //相关代码请看app.js

  //六、页面跳转
  //有两种方式：通过navigator组件和通过以wx的API方式跳转
  //通过navigator组件直接看home.wxml
  //以下是通过wx的API方式跳转
  detailclick(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }

})