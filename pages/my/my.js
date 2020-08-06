const app = getApp()

const name = require('../../common/name')
Page({
  data:{
    userName: '',
    number:1,
    userInfo: {},
    genderType:{
      0:'女',
      1:'男'
    },
    age:'',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    avator:'',
    login:false,
    patientMessage:{id:1,userName:'哈哈',gender:1,age:24},
  },

  /*
  选择selectComponent是根据组件的class或者id进行选择，可以获取子组件实例
  */ 
  getChildComponent: function () {
    const child = this.selectComponent('.my-name');
    console.log(child)
  },
  //自定义事件传入子组件中
  onMyEvent(e){
    console.log(e)
    console.log(e.detail)
  },
  //点击编辑个人资料详细信息
  editorMessage(){
    if(this.data.login){
    wx.navigateTo({
      url: '../editorMessage/editorMessage',
      events:{
        personMessage:function(data){
          console.log(data)
        },
      },
      success:res=>{
        console.log(this.data)
        res.eventChannel.emit('personMessage',{data:this.data})
      }
    })
  }else{
    return
  }
  },
  //点击进入就诊人管理页面
  managePatients(){
    wx.navigateTo({
      url: '../patinetsManage/patientsManage',
    })
  },
  //获取用户登陆信息
  bindGetUserInfo(){
    wx.getUserInfo({
      success:res=>{
        console.log(res)
        console.log(this.data.login)
        this.setData({
          login:true,
        })
      }
    })
  },
  onLoad(){
    console.log('在加载+onLoad')
    console.log(this.data)
    name.sayHello('我在加载')
    wx.getSetting({
      success:res=>{
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: res=> {
              console.log(res.userInfo)
              this.setData({
                login:true,
                userName:res.userInfo.nickName,
                gender:res.userInfo.gender
              })
              console.log(this.data)
            }
          })
        }else{
          this.setData({
            login:false
          })
        }
      }
    })
  },
  //接受上一页传过来的数据
  onShow(){
    console.log('在展示+onShow')
    if(this.data.message){
      let {message}=this.data
      console.log(message)
      this.setData({
        age:message.age,
        userName:message.userName,
        gender:message.gender
      })
    }
  },
  tapName:function(e){
    console.log(e)
  },
  tapAdd(){
    this.setData({
      number:this.data.number+1
    })
  },
    //组件传值事件
  tapEvent(){
    var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    },
  getUserMessage(){
      console.log(111)
      wx.showToast({
        title:'成功',
        icon:'success',
        duration:2000
      })
      wx.getUserInfo({
        success: res => {
          console.log(res)
          //全局储存登陆信息
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },
    login(){
    }
})