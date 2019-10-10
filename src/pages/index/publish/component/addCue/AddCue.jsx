import React, { Component } from 'react'
import {AddCueStyled} from './AddCueStyled'
class AddCue extends Component {
    render(){
      return (
        <AddCueStyled>
            <div className={this.props.flagCue? 'cueOne active' : 'cueOne'}>
                <div>
                    <div onClick={()=>{this.props.isShowCue()}}>取消</div>
                    <div>提醒谁看</div>
                    <div>确定</div>
                </div>
                <div>
                    <input type="text" placeholder='搜索签名或备注'/>
                </div>
            </div>
        </AddCueStyled>
      )
    }
}

export default AddCue