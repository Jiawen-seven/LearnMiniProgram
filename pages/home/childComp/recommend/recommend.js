// pages/home/childComp/recommend.js
Component({
  properties: {
    recommend:{
      type: Array,
      value: []
    }
  },
  data:{
    isLoad: false
  },
  methods: {
    imageload(){//图片加载完成会执行的函数
      //发射事件，但这里有多个图片，就会发送多次事件。这里需要加一个判断，如果有一个图片加载好了，那么高度也就确定了，也就不用发送多次事件。
      if(!this.data.isLoad){
        // console.log("图片加载完成")
        this.triggerEvent('imageload') //发射事件
        this.data.isLoad = true
      }
    }
  }
})
