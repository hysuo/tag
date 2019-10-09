import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {BorderContainer} from './MessageStyled'

import headImg from 'assets/img/msg/photo.png'
class Item extends Component {
    
 render(){
    //  let{img:headImg,name,content}=this.props.value
   return (
         <BorderContainer>
            <img src={headImg} alt="" onClick={this.toDynamic}/>
            <div onClick={this.toChat}>
                <p>热巴</p>
                <p>最近可好</p>
            </div>
            <div>
                2:00pm
            </div>
        </BorderContainer>
   )
 }
 toChat=() => {
     this.props.history.push('/msg/chat')
 }
}
export default withRouter(Item)
