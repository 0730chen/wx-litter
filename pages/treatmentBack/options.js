
const treatmentList =[
  {
    des:'胃痛',
    selection:[
      {
        name:'加重',
        plain:true
      },
      {
        name:'无变化',
        plain:true
      },
      {
        name:'改善',
        plain:true
      },
      {
        name:'明显改善',
        plain:true
      },
      {
        name:'痊愈',
        plain:true
      },
    ]
  },
  {
    des:'全身出汗',
    selection:[
      {
        name:'加重',
        plain:true
      },
      {
        name:'无变化',
        plain:true
      },
      {
        name:'改善',
        plain:true
      },
      {
        name:'明显改善',
        plain:true
      },
      {
        name:'痊愈',
        plain:true
      },
    ]
  },
  {des:'全身皮肤脱屑',selection:[
      {
        name:'加重',
        plain:true
      },
      {
        name:'无变化',
        plain:true
      },
      {
        name:'改善',
        plain:true
      },
      {
        name:'明显改善',
        plain:true
      },
      {
        name:'痊愈',
        plain:true
      },
    ]},
  {des:'头晕',selection:[
      {
        name:'加重',
        plain:true
      },
      {
        name:'无变化',
        plain:true
      },
      {
        name:'改善',
        plain:true
      },
      {
        name:'明显改善',
        plain:true
      },
      {
        name:'痊愈',
        plain:true
      },
    ]}
]
const bodyAction=[
  {
    name: '不适' ,
    //是否是空心，默认为空
    plain:true
  },
  {
    name: '一般' ,
    plain:true
  },
  {
    name: '好',
    plain:true
  },
  {
    name:'非常好',
    plain:true
  }
]

module.exports ={treatmentList,bodyAction}