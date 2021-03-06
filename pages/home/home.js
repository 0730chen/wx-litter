// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:1,
    patientList:[
      {userName:'吴用',status:0},
      {userName:'张三',status:1},
      {userName:'李四',status:0},
      {userName:'林冲',status:1}
    ],
    doctorList:[
      {title:'病历一'}
    ]
  },
  //预诊状态
  preStatus(e){
    let newPatientList = this.data.patientList.map(item=>{
      if(e.detail.name===item.userName){
        item = Object.assign({},e.detail)
      }
      return item
    })
    this.setData({
      patientList:newPatientList
    })
  },
  //切换预约和病历
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