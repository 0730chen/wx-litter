//index.js
const app = getApp()
let Hero = require('../data/heroList.js')
// let avator = require('../data/heroActor.js')
// console.log(Hero)
// console.log(avator)
Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    limte:18,
    hero:[],
    mark:0,
    key:0,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgList:[
      { name:'https://itea-cdn.qq.com/file/tgl/20190304/10710365.1551689575.1787c0951bbbb1f3da19c1192a39a0c6.710x365_152992.jpg'},
      {
        name:'https://itea-cdn.qq.com/file/tgl/20190228/9710365.1551340777.78648c00e4609dfb87229eb3e30487aa.710x365_138949.jpg'
      },
      {
        name:'https://itea-cdn.qq.com/file/tgl/20181210/710365.1544413993.1800972b93a10867cdf292f20fcb677e.710x365_287340.jpg'
      },{
        name:'https://itea-cdn.qq.com/file/tgl/20181210/710x365.1544414207.e7d73f3ed01b9ec3ef3e890f6eb856f9.710x365_216650.jpg'
      }
    ],
    avator:[],
  },
  // btnMore:function(){
  //   let mark = this.data.hero.Hero.length
  //   let limte = this.data.limte
  //   console.log(mark)
  //   console.log(limte)
  //   if(this.mark === this.limte){
  //     console.log('相同')
  //     this.setData({
  //       limte:18,
  //       filterHeroList:this.filterHeroList()
  //     })
  //   } else{
  //     console.log('不同')
  //     this.setData({
  //       limte:this.data.heto.Hero.length,
  //       filterHeroList:this.filterHeroList()
  //     })
  //   }
  // },
  filterHeroList:function(){
    // console.log(this.data.hero)
    return this.data.hero.slice(0,this.data.limte)
    // console.log(this.data.hero.Hero.slice(0,this.data.limte))
    //返回一个需要展示的数组
    // return this.data.hero.Hero.slice(0,this.data.limte)
      // return this.data.hero.slice(0,this.data.limte)

  },
  btnmore:function(){
    console.log(this.data.limte)//18
    console.log(this.data.mark)//96
    if(this.data.mark == this.data.limte){
      this.setData({
        mark:Hero.length,
        hero:this.filterHeroList()
      })
    } else {
      this.setData({
        mark:18,
        hero:Hero
      })
    }
    
  },

  onLoad: function() {
    this.setData({
      hero:Hero,
      // avator:avator,
    })
    this.filterHeroList(
      this.setData({
        hero:this.filterHeroList()
      })
    )
    // console.log(this.data.limte)//18
    // console.log(this.data.hero.length)//18
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    // this.btnMore()
    this.filterHeroList()
    // this.setData({
    //   hero:Hero.Hero
    // })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  // onGetOpenid: function() {
  //   // 调用云函数
  //   wx.cloud.callFunction({
  //     name: 'login',
  //     data: {},
  //     success: res => {
  //       console.log('[云函数] [login] user openid: ', res.result.openid)
  //       app.globalData.openid = res.result.openid
  //       wx.navigateTo({
  //         url: '../userConsole/userConsole',
  //       })
  //     },
  //     fail: err => {
  //       console.error('[云函数] [login] 调用失败', err)
  //       wx.navigateTo({
  //         url: '../deployFunctions/deployFunctions',
  //       })
  //     }
  //   })
  // },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },
  onReady:function(){
    // console.log(this.data.hero)
    // console.log(this.data.hero.Hero.length);
    
    // let mark  = this.data.hero.Hero.length
    
    // this.btnmore()
    // console.log(this.filterHeroList())
    // if(this.data.limte == this.mark){
    //   this.setData({
    //     limte:18,
    //     hero:this.filterHeroList()
    //   })
    // } else{
    //   this.setData({
    //     limte:mark,
    //     hero:this.filterHeroList()
    //   })
    // }
    // this.setData({
    //   hero:this.filterHeroList()
    // })

    
  },

  // btnmore:function(e,mark){
  //   console.log(this.filterHeroList())
  //   if(this.data.limte == this.mark){
  //     this.setData({
  //       limte:18,
  //       hero:this.filterHeroList()
  //     })
  //   } else{
  //     this.setData({
  //       limte:mark,
  //       hero:this.filterHeroList()
  //     })
  //   }
  // }

})
