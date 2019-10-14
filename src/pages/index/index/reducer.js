const defaultState = {
    isShowPublish : true,
    isUpdateheadimg: false,
    isUpadatesex: false
}
export default (state=defaultState, action) => {
    switch(action.type) {
      case 'changePublishState':
        return {
            isShowPublish: !state.isShowPublish,
            isUpdateheadimg: state.isUpdateheadimg,
            isUpadatesex: state.isUpadatesex
          }
      case 'changeHeadImg' :
        return {
          isUpdateheadimg: !state.isUpdateheadimg,
          isShowPublish: state.isShowPublish,
          isUpadatesex: state.isUpadatesex
        }
      case  'changeSex' :
        return {
          isUpdateheadimg: state.isUpdateheadimg,
          isShowPublish: state.isShowPublish,
          isUpadatesex: !state.isUpadatesex
        }
      default:
        return state
    }
}