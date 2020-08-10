// pages/inquiryForm/inquiryForm.js

const questionList = require('./question')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: ['a', 'b'],
    questionList:questionList
  },

  /*
  选择值变化
  */
 onChange(event) {
   let index = event.currentTarget.dataset.index
   let value = event.detail
   let newQuestion = questionList.map((e,i)=>{
     if(i===index){
       e.value.push(...value)
     }
     return e
   })
   console.log(newQuestion)
   this.setData({
     questionList:newQuestion
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