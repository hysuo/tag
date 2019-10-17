const chatlist = require('./chatlist.json')
const tagList = require('./tagList.json')
const wechat001 = require('./wechat/001.json')

module.exports = function(){
  return{
      chatlist,
      tagList,
      wechat001
  }
}