//首页所需的请求数据
import request from './network'

export function getMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getGoodData(type,page){
  return request({
    url: '/home/data',
    data:{
      type,
      page
    }
  })
}