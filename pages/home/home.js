Page({
  data:{
    content: '流行'
  },
  itemclick(event){
    // console.log(event)
    const item = event.detail.item
    this.setData({
      content: item
    })
  }
})