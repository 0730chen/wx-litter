// pages/preDiagnosis/preDiagnosis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //输入的文字
    value:'',
    fileList: [],
    show: false,
    actions: [
      { name: '选项', color: '#07c160' },
      { loading: true },
      { name: '禁用选项', disabled: true },
    ],
  },
  /*
  跳转到问诊选择页面 
  */
 inquiryPage(){
   wx.navigateTo({
     url: '../../pages/inquiryForm/inquiryForm',
   })
 },
/***
 * 点击上传选择
 * 
 */
uploadFile(event){
  const { file, callback } = event.detail;
  callback(file.type === 'image');
},
afterRead(event){
  console.log(event)
},
  /**
   * 
   * 上传图片
   * 
  */
 afterRead(event) {
  const { file } = event.detail;
  // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
  wx.uploadFile({
    url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
    filePath: file.path,
    name: 'file',
    formData: { user: 'test' },
    success(res) {
      // 上传完成需要更新 fileList
      const { fileList = [] } = this.data;
      fileList.push({ ...file, url: res.data });
      this.setData({ fileList });
    },
  });
},
  /*
  输入值
  */
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
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