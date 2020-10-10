//getApp()获取App()产生的示例对象
const app = getApp()
const name = app.globalData.name
const age = app.globalData.age
console.log(name+age)
Page({
  handleGetUserInfo(event){
    console.log(event)
  }
})