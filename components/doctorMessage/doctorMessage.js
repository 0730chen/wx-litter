// components/doctorMessage/doctorMessage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    actions: [
      {
        name: '分享朋友',
        openType:'share'
      },
      {
        name: '生成海报分享',
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad:()=>{
      console.log(this.data)
    },
    preDiagnosis(e){
      console.log(e)
      wx.navigateTo({
        url: '../preDiagnosis/preDiagnosis',
      })
    },
    onClose() {
      console.log(1)
      this.setData({ show: false });
    },
  
    onSelect(event) {
      console.log(2)
      console.log(event.detail);
    },
    onOpen(){
      this.setData({show:true})
    }
  }
})
