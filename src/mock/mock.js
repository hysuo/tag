const chatlist = require('./chatlist.json')
const tagList = require('./tagList.json')
const tags = require('./tags.json')
const dynamicList = require('./dynamicList.json')

module.exports = function(){
  return{
      chatlist,
      tagList,
      tags,
      dynamicList
  }
}