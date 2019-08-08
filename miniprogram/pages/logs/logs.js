let Stroy = require('../data/stroy.js')
Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    StroyList:Stroy
  },
  btnUrl(e){
    console.log(e)
    var $id = e.currentTarget.dataset.id
    console.log(this.data.StroyList)
    for(let i in this.data.StroyList){
      console.log(this.data.StroyList[i]['newImg'])
    }
  },
  onUnload(){
    this.setData({
      StroyList: Stroy
    })
  },
  onShow(){},
  onLoad(){},

})