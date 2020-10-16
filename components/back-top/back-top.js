// components/back-top/back-top.js
Component({
  methods: {
    topclick(){
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  }
})
