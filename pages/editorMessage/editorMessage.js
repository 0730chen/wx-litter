// pages/editorMessage/editorMessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    genderType:{
      0:'女',
      1:'男'
    },
    array: ['女', '男'],
    //当前选中得性别值
    index:0,
    //当前选择得日期
    date:'',
    phone:'',
    //医生名称
    userName:'',
     //年龄
     age:'',
     //性别
     gender:'',
  },
 /**
  * 选中性别改变
  * 
  */
 bindPickerChange(e){
  let index = e.detail.value
  this.setData({
    index:index,
    gender:index
  })
 },
 /**
  * 日期选择
  */
 bindDateChange(e){
  console.log('picker发送选择改变，携带值为', e.detail.value)
  //截取前四位
  let data = parseInt(e.detail.value.slice(0,4))
  console.log(data)
  this.setData({
    date: e.detail.value,
    age:2020-data+'岁'
  })
 },
  /**
  * 保存用户信息
  */
 saveMessage(){
  console.log(this.data)
  let message = {
    userName:this.data.userName,
    phone:this.data.phone,
    gender:parseInt(this.data.gender),
    age:this.data.age
  }
  let pages = getCurrentPages()
  //当前页面
  let currPage = pages[pages.length-1]
  //上一页
  let prevPage = pages[pages.length-2]
  prevPage.setData({
    message:message
  })
  wx.navigateBack({
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.query)
    const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('personMessage',{data:'111'})
    eventChannel.on('personMessage',res=>{
      console.log(res)
      this.setData({
        userName:res.data.userName,
        gender:res.data.gender,
        age:res.data.age,
        index:res.data.gender
      })
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

  }
})