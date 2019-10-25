const tagList = require('./tagList.json')
const tags = require('./tags.json')
const dynamicList = require('./dynamicList.json')
const chatlist = require('./chatlist.json')
const wechat0001 = require('./wechat/0001.json')
const wechat0002 = require('./wechat/0002.json')
const dy0 = require('./otherdynamic/0.json')
const dy2 = require('./otherdynamic/2.json')
const dy3 = require('./otherdynamic/3.json')
const dy002 = require('./otherdynamic/002.json')
const dy003 = require('./otherdynamic/003.json')
const dy10 = require('./otherdynamic/10.json')
const dy11 = require('./otherdynamic/11.json')
const dy100 = require('./otherdynamic/100.json')
module.exports = function(){
  return{
      chatlist,
      tagList,
      tags,
      dynamicList,
      wechat0001,
      wechat0002,
      dy0,
      dy2,
      dy3,
      dy002,
      dy003,
      dy10,
      dy11,
      dy100
}
}