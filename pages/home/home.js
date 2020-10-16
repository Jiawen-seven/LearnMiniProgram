import {getMultidata,getGoodData} from '../../service/home'

const types = ['pop','new','sell']
const BACKTOP = 1000

Page({
  data: {
    banner: [],
    recommend: [],
    title: ['流行','新款','精选'],
    good:{
      'pop': {page:0,list:[]},
      'new': {page:0,list:[]},
      'sell': {page:0,list:[]}
    },
    currentType: 'pop',
    showBackTop: false, //记录是否显示返回顶部按钮
    isTabFixed: false, //记录是否吸顶效果
    tabScrollTop: 0 //记录tab-control距离顶部的位置
  },
  onLoad(){
    //1.请求轮播图以及推荐数据
    this._getMultidata(),
    //2.请求商品数据
    this._getGoodData('pop')
    this._getGoodData('new')
    this._getGoodData('sell')
  },


   //---------------------数据请求----------------------
  _getMultidata(){
    getMultidata().then(res => {
      // console.log(res)
      const banner = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      // console.log(banner)
      // console.log(recommend)
      this.setData({
        banner,
        recommend
      })
    }).catch(res => {
      console.log(res)
    })
  },
  _getGoodData(type){
    //1.获取页面
    const page = this.data.good[type].page + 1;
    //2.发送网络请求
    getGoodData(type,page).then(res => {
      console.log(res)
      //2.1.获取数据
      const list = res.data.data.list;

      //2.2.存放数据，将数据存放到对应type的list中
      // this.data.good[type].list.push(list) //这样的话，是把整个数组放进另一个数组里面，形成了二维数组，不是想要的结果。
      // this.data.good[type].list.push(...list) //es6中的语法，前面加三个点，代表把数组拆散之后加进另一个数组中，可以成功加入，但这样的话页面不会跟着变。
      const oldList = this.data.good[type].list
      oldList.push(...list)

      //2.3将数据存放到data中的good中，使得页面也跟着变化。
      const typeKey = `good.${type}.list`  //es6字符串中加入变量的写法
      const pageKey = `good.${type}.page`
      this.setData({
        //  'good.pop.list': oldList  //这样肯定不对，首先这里写“死”了，其次结果乱七八糟，暂不知道原因
        // typeKey : oldList //这样写不对，会直接把typeKey改成oldList，目的是想把oldList赋值给typeKey的`goos.${type}.list`
        [typeKey] : oldList,
        [pageKey] : page
      })
    })
  },

  //--------------事件监听----------------------
  itemclick(event){
    // console.log(event)
    //获取组件传过来的index
    const index = event.detail.index;
    // console.log(index)
    //设置currentType
    this.setData({
      currentType: types[index]
    })
  },

  //上拉加载更多
  onReachBottom(){//监听滚动到底部
    this._getGoodData(this.data.currentType)
  },

  //返回顶部按钮事件（生命周期函数）
  onPageScroll(options){//监听页面滚动
    //1.取出scrollTop
    const scrollTop = options.scrollTop; //当前滚动的位置
    const flag = scrollTop >= BACKTOP
    //2.修改showBackTop属性
    if(flag != this.data.showBackTop){ //只要超过，才进行数据修改
      this.setData({
        showBackTop: flag
      })
    }

    //3.修改isTabFixed属性
    const temp = scrollTop >= this.data.tabScrollTop;
    if(temp != this.data.isTabFixed){
      this.setData({
        isTabFixed: temp
      })
    }


  },

  //监听图片加载完成（主要是推荐的数据） 用于tab-control的吸顶效果
  imageload(){
    //获取某个组件距离顶部的距离的函数，select中填入的就是指定组件的id/class，不过id具有唯一性，用id比较好
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      // console.log(rect)
      //记录tab-control距离顶部的位置
      this.data.tabScrollTop = rect.top;
    }).exec()
  }
})