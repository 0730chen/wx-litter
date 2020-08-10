// pages/patinetsManage/patientsManage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
    //标题
    title:'',
    //当前页面是管理还是选择
    status:false,
    patientsList:[
      {id:1,userName:'哈哈',gender:1,age:24},
      {id:2,userName:'依依',gender:1,age:18},
      {id:3,userName:'哈哈',gender:0,age:24},
      {id:4,userName:'依依',gender:0,age:18},
      {id:5,userName:'哈哈',gender:1,age:24},
    ],
    gender:{
      0:'女',
      1:'男'
    }
  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },

  //编辑患者信息
  editorPatient(e){
    let index = parseInt(e.currentTarget.dataset.index)
    console.log(index)
    wx.navigateTo({
      url: '../editorPatient/editorPatient',
      events:{
        patientMessage:function(data){
          console.log(data)
        }
      },
      success:res=>{
        res.eventChannel.emit('patientMessage',this.data.patientsList[index])
      }
    })
  },
  //添加患者
  addPatient(){
    wx.navigateTo({
      url: '../editorPatient/editorPatient',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let key = options.key
    if(key==='my'){
      this.setData({
        title:'患者管理'
      })
    }else{
      this.setData({
        title:'选择预约患者',
        status:true
      })
    }
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
    console.log(this.data)
    if(this.data.message){
     this.data.patientsList.push(this.data.message)
      this.setData({
        patientsList:this.data.patientsList
      })
    }
    if(this.data.newPatient){
      this.data.patientsList.forEach(e=>{
        if(e.id===this.data.newPatient.id){
          Object.assign(e,this.data.newPatient)
        }
      })
      console.log(this.data.patientsList)
      this.setData({
        patientsList:this.data.patientsList
      })
    }
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