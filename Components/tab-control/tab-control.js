// Components/tab-control/tab-control.js
Component({
  properties: {
    titles:{
      type: Array,
      value: []
    }
  },
  data: {
    // titles: ['流行','新款','精选'],
    currentIndex: 0
  },
  methods: {
    tabclick(event){
      // console.log(event)
      const index = event.currentTarget.dataset.index;
      const item = event.currentTarget.dataset.item;
      //把事件传出去给home
      this.triggerEvent('itemclick',{index,item},{})
      this.setData({
        currentIndex : index
      })
    }
  }
})
