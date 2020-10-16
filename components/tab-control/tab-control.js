// components/tab-control/tab-control.js
Component({
  data:{
    currentIndex: 0
  },
  properties: {
    title: {
      type: Array,
      value: []
    }
  },
  methods: {
    itemclick(event){
      // console.log(event)
      //获取点击的标题的index
      const index = event.currentTarget.dataset.index;
      //将点击的标题的index赋给currentIndex
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('itemclick',{index},{}) //发射事件
    }
  }
})
