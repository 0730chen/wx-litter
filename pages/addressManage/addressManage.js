// pages/addressManage/addressManage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[
    ]
  },

  //添加收货地址
  addAddress(){
    wx.navigateTo({
      url: '../../pages/addressEdit/addressEdit',
    })
  },
  //编辑地址
  editAddress(e){
    console.log(e)
    let index = e.currentTarget.dataset.index
    let addressMessage = JSON.stringify(this.data.addressList[index])
    wx.navigateTo({
      url: `../../pages/addressEdit/addressEdit?address=${addressMessage}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取微信中的收获地址
    let addressMessage = {}
    wx.chooseAddress({
      success:(res)=>{
        res.addressMessage = res.provinceName+res.cityName+res.countyName+res.detailInfo
        addressMessage =  Object.assign({},res)
        console.log(res)
        console.log(addressMessage)
        let newArray = []
        newArray.push(addressMessage)
        this.setData({
          addressList:newArray
        })
      }
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
    console.log(this.data.newAddress)
    if(this.data.newAddress ){

      let newAddress = this.data.newAddress
      let oldAddressList = this.data.addressList
      let newAddressList = []
      if(this.data.type==='add'){
        newAddressList.push(...oldAddressList,newAddress)
        console.log(newAddressList)
        this.setData({
          addressList:newAddressList
        })
      }else{
        console.log('编辑内容')
      }
      // delete this.data.newAddress
      // delete this.data.type
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