// components/patientMessage/patientMessage.js
var util = require('../../utils/util.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    patientMessage:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //当前时间
    date:new Date()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //时间选择
    bindDateChange(e){
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        date: e.detail.value
      })
    },
    //患者选择
    changePatient(){
      wx.navigateTo({
        url: '../../pages/patinetsManage/patientsManage?key=pre',
      })
    }
  },
  ready:function(){
    let date = util.formatTime(new Date)
    this.setData({
      date:date
    })
  }
})
