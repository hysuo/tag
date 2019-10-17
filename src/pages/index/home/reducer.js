import { TAGLISTDATA} from './actionTypes'

const defaultState = {
  list: []
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case TAGLISTDATA:
      console.log(action.data.data)
      return {
        list : action.data.data
      }
    default:
      return state
  }
}