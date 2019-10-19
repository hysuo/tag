const defaultState = {
  usrname: 'KUOLUO',
  signature: ''
}

export default (state=defaultState, action) => {
  switch(action.type){
    case 'changename':
      return {
        usrname: action.data,
        signature: state.signature

      }
    case 'changesnt':
      return {
        usrname: state.usrname,
        signature: action.data
      }
    default:
      return state
  }
}