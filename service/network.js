const baseURL = "http://152.136.185.210:8000/api/w6"

export default function (options){
  return new Promise((resolve,reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method || "get",
      data: options.data || "",
      success: resolve, //因为resolve本身就是回调函数，所以可以直接用es6语法写
      fail: reject
      // success: (res)=> {
      //   resolve(res)
      // },
      // fail: (res)=>{
      //   reject(res)
      // }
    })
  })
}