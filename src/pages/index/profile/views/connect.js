import { connect } from 'react-redux'
import { changeusr } from '../actionCreator'
import { changesnt } from '../actionCreator'
import { changeHeadImg } from '../../../index/index/actionCreator'
import { changeSex } from '../../../index/index/actionCreator'

const mapState = (state) => {
  return {
    usrname: state.profile.usrname,
    signature: state.profile.signature
  }
}
const mapDispatch = (dispatch) => {
    return {
      changeusr(data) {
        dispatch(changeusr(data))
      },
      changesnt(data) {
        dispatch(changesnt(data))
      }
    }
  }

export default connect(mapState,mapDispatch)