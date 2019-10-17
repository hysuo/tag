import { SAGA_TAGLISTDATA, TAGLISTDATA} from './actionTypes'

export const sagaTagListData = () => {
  return {
    type: SAGA_TAGLISTDATA 
  }
}
export const tagListData = (data) => {
    return {
      type: TAGLISTDATA,
      data
    }
}