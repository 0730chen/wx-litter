/*
behaviors相当于vue里面的mixin
*/
module.exports = {
  behaviors:[],
  properties:{
    myBehaviorProperty:{
      type:String
    }
  },
  data:{
    myBehaviorData: {}
  },
  attached:function(){},
  methods:{
    myBehaviorMethod:function(){}
  }
}