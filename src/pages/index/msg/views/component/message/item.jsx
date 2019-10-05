import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {BorderContainer} from './MessageStyled'

import headImg from 'assets/img/msg/photo.png'
class Item extends Component {
 render(){
   return (
         <BorderContainer>
            <img src={headImg} alt="" onClick={this.toDynamic}/>
            <div onClick={this.toChat}>
                <p>热巴</p>
                <p>最近过的可好</p>
            </div>
            <div>
                2:00pm
            </div>
        </BorderContainer>
   )
 }
 toChat=() => {
     this.props.history.push('/chat')
 }
}
export default withRouter(Item)
