// components/preDiagnosis/preDiagnosis.js
const Dialog  = require('../../miniprogram_npm/@vant/weapp/dialog/dialog')
const Toast  = require('../../miniprogram_npm/@vant/weapp/toast/toast');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:String,
    patient:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    show:false
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //修改预诊
    rewritePre(){
      wx.navigateTo({
        url: '../../pages/preDiagnosis/preDiagnosis?key=rewrite',
      })
    },
    //查看病历
    findRecord(){
      wx.navigateTo({
        url: '../../pages/recordDetails/recordDetails',
      })
    },
    //复诊
    rePre(){
      wx.navigateTo({
        url: '../../pages/preDiagnosis/preDiagnosis',
      })
    },
      //取消预诊
  cancelPre(e){
    let that = this
    Dialog.default.confirm({
      context: that,
      title: '',
      message: '您是否取消这次预诊'
     }).then(() => {
      // on close
      Toast.default.success({
        context:that,
        message:'取消成功',
      });
      let name = this.properties.patient.userName
      var myEventDetail = {
        name:name,
        status:3
      } // detail对象，提供给事件监听函数
      this.triggerEvent('status', myEventDetail)
     }).catch(()=>{
       console.log(2)
     })
  },
  //删除预诊记录
  deletePreRecord(){
    let that = this
    Dialog.default.confirm({
      context: that,
      title: '',
      message: '是否删除此次记录'
     }).then(() => {
      // on close
      Toast.default.success({
        context:that,
        message:'删除成功',
      });
     }).catch(()=>{
       console.log(2)
     })
  }
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function() {
    // 在组件实例进入页面节点树时执行
  },
  detached: function() {
    // 在组件实例被从页面节点树移除时执行
  },
})
