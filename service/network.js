export default function request(options){
  return new Promise((resolve,rejec) => {
    wx.request({
      url: options.url,
      method: options.method,
      data: options.data,
      success: (res)=>{
        resolve(res)
      },
      fail: (res) => {
        reject(res)
      }
    })
  })
}