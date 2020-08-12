// pages/recordDetails/recordDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    basicMessage:[
      {
        title:'问诊时间',
        result:'2017-08-21'
      },
      {
        title:'医生',
        result:'王二狗'
      },
      {
        title:'患者',
        result:'哈哈，23岁，男'
      },
      {
        title:'主诉',
        result:'胃痛，全身出汗'
      },
      {
        title:'体格检查',
        result:'全身皮肤脱屑'
      }
    ],
    diseaseList:[
      {
        title:'病机',
        result:'水湿内停',
      },
      {
        title:'证型',
        result:'水湿内停证'
      }
    ],
    treatment:{
      title:'处方',
      result:'猪苓20克，泽泻20克，茯苓20克，桂枝12克'
    },
    condition:[
      {
        title:'寒热建议',
        result:[
          {
            status:'宜',
            result:'保暖，受风' 
          },
          {
            status:'勿',
            result:'受风，受凉'
          }
        ]
      },
      {
        title:'饮食建议',
        result:[
          {
            status:'宜',
            result:'少食多餐，易消化食物，喝热水，吃热饭菜，准时进食'
          },
          {
            status:'勿',
            result:'重口味，油炸食品,牛饮，补品，高纤维食物，饭前大量饮水'
          }
        ]
      }
    ]
  },

  /**
   * 
   * @param {*} options 
   */
  rewrite(){
    wx.navigateTo({
      url: '../../pages/preDiagnosis/preDiagnosis',
    })
  },
  treatment(){
    wx.navigateTo({
      url: '../../pages/treatmentBack/treatmentBack',
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