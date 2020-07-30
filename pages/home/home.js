// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:1,
    patientList:[
      {title:'病人一'},
      {title:'病人二'},
      {title:'病人三'},
      {title:'病人四'}
    ],
    doctorList:[
      {title:'预约一'}
    ]
  },
  //切换患者和医生
  changeActive(e){
    let index = parseInt(e.target.dataset.index)
    if(this.data.active===index){
    }else{
      this.setData({
        active:index
      })
    }
  },
  //点击患者，跳转到详情页
  onPatient(e){
    console.log(e)
    let index = parseInt(e.target.dataset.index)
    console.log(index)
    let patientList  = this.data.patientList
    wx.navigateTo({
      url: '../../pages/patient/patient',
      events:{
        patient:function(data){
          console.log(data)
        },
        someEvent:function(data){
          console.log(data)
        }
      },
      success:function(res){
        console.log(this)
        res.eventChannel.emit('patient',{data:patientList[index]})
      }
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