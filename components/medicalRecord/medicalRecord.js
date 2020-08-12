// components/medicalRecord/medicalRecord.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    treatmentBack(){
      wx.navigateTo({
        url: '../../pages/treatmentBack/treatmentBack',
      })
    },
    rePre(){
    wx.navigateTo({
      url: '../../pages/preDiagnosis/preDiagnosis',
    })
  },
  recordDeatils(){
    wx.navigateTo({
      url: '../../pages/recordDetails/recordDetails',
    })
  },
}
})
