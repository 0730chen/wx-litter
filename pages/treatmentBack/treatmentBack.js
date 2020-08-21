// pages/treatmentBack/treatmentBack.js
const  {bodyAction,treatmentList} = require('./options')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    bodyAction,
    treatmentList,
  },

  /*
  
  * */
 bodyChnage(event){
   console.log(event)
   let garderType = {
     10:'不适',
     20:'一般',
     30:'好',
     40:'非常好'
   }
   if(event.detail){
       wx.showToast({
      icon: 'none',
      title: `当前值：${garderType[event.detail]}`,
    });
  }
 },
 otherChange(event){
  let garderType = {
    10:'加重',
    20:'无变化',
    30:'改善',
    40:'明显改善',
    50:'痊愈'
  }
  if(event.detail){
      wx.showToast({
     icon: 'none',
     title: `当前值：${garderType[event.detail]}`,
   });
 }
 },
 clickBody(e){
   console.log(e.currentTarget.dataset.name)
   let name = e.currentTarget.dataset.name
   let newArray = this.data.bodyAction.map(e=>{
    e.plain = !(e.name === name && e.plain === true);
    return e
   })
   this.setData({
     bodyAction:newArray
   })
 },
 otherClick(e){
   let {name,index} = e.currentTarget.dataset
      let newArray = this.data.treatmentList.map((item,i)=>{
        if(i===index){
          console.log(item)
          item.selection.forEach(tag=>{
            tag.plain = !(tag.name ===name && tag.plain ===true)
          })
        }
        return item
      })
      this.setData({
        treatmentList:newArray
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