const defaultState = {
    isShowPublish : true
}
export default (state=defaultState, action) => {
    switch(action.type) {
      case 'changePublishState':
        return {
            isShowPublish: !state.isShowPublish
          }
      default:
        return state
    }
}