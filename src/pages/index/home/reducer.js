import { TAGLISTDATA} from './actionTypes'

const defaultState = {
  tagList: []
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case TAGLISTDATA:
      return {
        tagList : action.data.data
      }
    default:
      return state
  }
}