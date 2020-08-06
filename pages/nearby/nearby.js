// pages/nearby/nearby.js
var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
qqmapsdk = new QQMapWX({
  key: 'LDKBZ-WJYK6-G7LSI-MWBA4-5XGO2-PAFJQ'
});
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:{},
    address:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data)
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('nearby',data=>{
      console.log(data.location)
      this.setData({
        location:data.location
      })
    })
    console.log(this.data)
    qqmapsdk.reverseGeocoder({
      location:{
        latitude: this.data.location.latitude,
        longitude: this.data.location.longitude
      },
      success:(res)=>{
        console.log(res)
        this.setData({
          address:res.result.address
        })
      },
      fail:(err)=>{
        console.log(err)
      },


    })
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
  //跳转到医生详情
  doctorDetail(){
    wx.navigateTo({
      url: '../doctorDetail/doctorDetail',
    })
  },
  /*
  跳转到预诊表单
  */ 
 onPreDiagnosis(){
   console.log(1)
   wx.navigateTo({
   })
 }
})