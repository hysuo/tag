const user = require('./db.json')
const tag = require('./tag.json')
// const hotcate = require('./cookbook-hotcate.json')
// const cate = require('./cookbook-category.json')

module.exports = function() {
  return {
    // swiper,
    // hotcate,
    tag,
    user
  }
}