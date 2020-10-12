// pages/image/image.js
Page({
  data: {
    path: ''
  },
  seven(){
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        const imagePath = res.tempFilePaths[0]
        this.setData({
          path : imagePath 
        })
      }
    })
  },
  loadclick(){
    console.log("图片已加载完成")
  }
})