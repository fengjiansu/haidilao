//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '/pages/images/images.png',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[
      {
        name:'招牌菜',
        url:'signatureDishes'
      },
      {
        name:'主食',
        url:'staples',
        isSplot:true
      },
      {
        name:'饮料',
        url:'drinks'
      },
      {
        name:'小吃',
        url:'snacks'
      },
      {
        name:'水果',
        url:'fruits',
        isSplot:true
      },
      {
        name:'套餐',
        url:'packages'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
    
})
