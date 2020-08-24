// pages/editorPatient/editorPatient.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //是否是默认就诊人
    default:false,
    id:0,
    //姓名
    userName:'',
    //年龄
    age:'',
    //性别
    gender:'',
    //身高
    height:'',
    //体重
    weight:'',
    genderType:{
      0:'女',
      1:'男'
    },
    array: ['女', '男'],
    //当前选中得性别值
    index:0,
    //当前选择得日期
    date:'',
    //户主关系
    relationArray:[
      '本人',
      '爸爸',
      '妈妈',
      '爷爷',
      '奶奶',
      '外公',
      '外婆',
      '儿子',
      '女儿',
      '其他'
    ],
    //选中得index值
    relationIndex:0,
    //页面显示值
    relation:'',
  },

  /**
   * 默认选中改变触发函数
   * 
  */
 defaultChange(e){
   this.setData({
     default:e.detail
   })
 },
 /**
  * 
  * @param {*} options 
  * 修改用户头像
  */
 changeAvator(){
   //上传图片
   wx.chooseImage({
    success (res) {
      const tempFilePaths = res.tempFilePaths
      wx.uploadFile({
        url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
        filePath: tempFilePaths[0],
        name: 'file',
        formData: {
          'user': 'test'
        },
        success (res){
          const data = res.data
          //do something
        }
      })
    }
  })
 },
 /**
  * 
  * @param {户主关系改变}
  */
 bindRelation(e){
  let index = e.detail.value
  this.setData({
    relation:this.data.relationArray[index]
  })
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
  * 保存用户信息和修改用户信息，使用id是否存在判断当前是新增还是修改
  */
 saveMessage(){
  let pages = getCurrentPages()
  //当前页面
  let currPage = pages[pages.length-1]
  //上一页
  let prevPage = pages[pages.length-2]
   if(this.data.id===0){
   let message = {
     id:Math.random()*10,
     relation:this.data.relation,
     userName:this.data.userName,
     height:this.data.height,
     weight:this.data.weight,
     age:parseInt(this.data.age.replace('岁','')),
     gender:parseInt(this.data.gender)
   }
  prevPage.setData({
    message:message
  })
}else{
  let newPatient = {
    id:this.data.id,
    relation:this.data.relation,
     userName:this.data.userName,
     height:this.data.height,
     weight:this.data.weight,
     age:parseInt(this.data.age.replace('岁','')),
     gender:parseInt(this.data.gender)
  }
  prevPage.setData({
    newPatient:newPatient
  })
}
wx.navigateBack({
})
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('patientMessage',res=>{
      console.log(res)
      this.setData({
        userName:res.userName,
        age:res.age+'岁',
        gender:res.gender,
        index:res.gender,
        id:res.id,
        height:res.height,
        weight:res.weight,
        relation:res.relation
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