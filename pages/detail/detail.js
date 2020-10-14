// pages/detail/detail.js
Page({
  onLoad(options){//主页向详情页传递数据，在这里可以查看
    console.log(options)
  },
  onUnload(){//详情页向主页传递数据，其实是详情页修改主页数据来达到目的。
    //1.获取主页的页面对象
    const pages = getCurrentPages()
    // console.log(pages)
    const home = pages[pages.length-2]

    //2.调用页面对象的setData
    home.setData({
      title: 'king'
    })
  }
})