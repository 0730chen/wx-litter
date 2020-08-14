// pages/addressEdit/addressEdit.js
const Dialog  = require('../../miniprogram_npm/@vant/weapp/dialog/dialog')
const Toast  = require('../../miniprogram_npm/@vant/weapp/toast/toast');
const area = require('./area.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaList:area,
    show: false,
    address:'',
    checked: true,
  },

  //
  saveAddress(){
    console.log(1)
    let that = this
    Toast.default.success({
      context:that,
      message:'保存成功',
    });

  },
  deleteAddress(){
    console.log(2)
    let that = this
    Dialog.default.confirm({
      context: that,
      title: '',
      message: '确定要删除吗'
     }).then(() => {
      Toast.default.success({
        context:that,
        message:'删除成功',
      });
     })
      // on close
  },
  onChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
  confirmAddress(addressDetail){
    console.log(addressDetail)
    const addressMessage = ()=>{
      let str = ''
      addressDetail.detail.values.forEach(e=>{
        str+=`${e.name}/`
      })
      
      return str.slice(0,str.length-2)
    }
    this.setData({ show: false });
    this.setData({
      address:addressMessage()
    })
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

  }
})