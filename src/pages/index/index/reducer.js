import headImg from 'img/profile/headImg.png'
const defaultState = {
    isShowPublish : true,
    isUpdateheadimg: false,
    isUpadatesex: false,
    sex: 'girl',
    headimg: headImg
}
export default (state=defaultState, action) => {
    switch(action.type) {
      case 'changePublishState':
        return {
            isShowPublish: !state.isShowPublish,
            isUpdateheadimg: state.isUpdateheadimg,
            isUpadatesex: state.isUpadatesex,
            sex: action.data,
            headimg: action.img
          }
      case 'changeHeadImg' :
        return {
          isUpdateheadimg: !state.isUpdateheadimg,
          isShowPublish: state.isShowPublish,
          isUpadatesex: state.isUpadatesex,
          sex: action.data,
          headimg: action.img
        }
      case  'changeSex' :
        return {
          isUpdateheadimg: state.isUpdateheadimg,
          isShowPublish: state.isShowPublish,
          isUpadatesex: !state.isUpadatesex,
          sex: action.data,
          headimg: action.img
        }
      case 'updateSex' :
        return {
          isUpdateheadimg: state.isUpdateheadimg,
          isShowPublish: state.isShowPublish,
          isUpadatesex: state.isUpadatesex,
          sex: action.data,
          headimg: action.img
        }
      case 'changeImg' :
        return {
          isUpdateheadimg: state.isUpdateheadimg,
          isShowPublish: state.isShowPublish,
          isUpadatesex: state.isUpadatesex,
          sex: action.data,
          headimg: action.img
        }
      default:
        return state
    }
}