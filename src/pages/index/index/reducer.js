const defaultState = {
    isShowPublish : true,
    isUpdateheadimg: false,
    isUpadatesex: false,
    sex: 'girl'
}
export default (state=defaultState, action) => {
    switch(action.type) {
      case 'changePublishState':
        return {
            isShowPublish: !state.isShowPublish,
            isUpdateheadimg: state.isUpdateheadimg,
            isUpadatesex: state.isUpadatesex,
            sex: action.data
          }
      case 'changeHeadImg' :
        return {
          isUpdateheadimg: !state.isUpdateheadimg,
          isShowPublish: state.isShowPublish,
          isUpadatesex: state.isUpadatesex,
          sex: action.data
        }
      case  'changeSex' :
        return {
          isUpdateheadimg: state.isUpdateheadimg,
          isShowPublish: state.isShowPublish,
          isUpadatesex: !state.isUpadatesex,
          sex: action.data
        }
      case 'updateSex' :
        return {
          isUpdateheadimg: state.isUpdateheadimg,
          isShowPublish: state.isShowPublish,
          isUpadatesex: state.isUpadatesex,
          sex: action.data
        }
      default:
        return state
    }
}