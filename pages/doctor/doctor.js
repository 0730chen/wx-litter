// pages/doctor/doctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //输入框的参数
    value:'',
    //关注医生的列表
    attentionDoctor:[
      {name:'张医生'},
      {name:'李医生'}
    ],
    //用户是否准备输入
    focusVisible:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      focusVisible:false
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 输入框聚焦
   * 
   */
  inputFocus(){
    console.log(this.data.focusVisible)
    this.setData({
      focusVisible:true
    })
    if(this.data.focusVisible){
      wx.navigateTo({
        url: '../searchDoctor/searchDoctor',
      })
    }
  },
  //点击预约
  preDiagnosis(){
    console.log('预约')
    wx.navigateTo({
      url: '../preDiagnosis/preDiagnosis',
    })
  },
  /**
   * 点击附近医生获取地理信息
   */
  onFindDoctor(){
    // wx.startLocationUpdateBackground(
    //   {
    //     success (res) {
    //       console.log(res.authSetting)
    //       // res.authSetting = {
    //       //   "scope.userInfo": true,
    //       //   "scope.userLocation": true
    //       // }
    //     }
    //   }
    // )
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success () {
              // 用户已经同意小程序使用定位功能，后续调用 wx.getLocation 接口不会弹窗询问
              wx.getLocation({
                type: 'wgs84',
                success (res) {
                  const latitude = res.latitude
                  const longitude = res.longitude
                  const speed = res.speed
                  const accuracy = res.accuracy
                  let location = {
                    latitude,longitude,speed,accuracy
                  }
                  wx.navigateTo({
                    url: '../nearby/nearby',
                    events:{
                    },
                    success:function(res){
                      console.log(this)
                      res.eventChannel.emit('nearby',{location})
                    }
                  })
                }
               })
            }
          })
        }else{
          wx.getLocation({
            type: 'wgs84',
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              const speed = res.speed
              const accuracy = res.accuracy
              let location = {
                latitude,longitude,speed,accuracy
              }
              wx.navigateTo({
                url: '../nearby/nearby',
                events:{
                },
                success:function(res){
                  res.eventChannel.emit('nearby',{location})
                }
              })
            }
           })
        }
      }
    })
  }
})