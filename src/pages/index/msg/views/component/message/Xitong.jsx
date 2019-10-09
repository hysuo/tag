import React, { Component } from 'react'
import {MessageContainer} from './MessageStyled'

import blank from 'assets/img/msg/blank.png'
export default class Xitong extends Component {
  state={
    list:[]
  }
 render(){
   if(this.state.list.length === 0){
    return (
      <MessageContainer>
         <img className='blank' src={blank} alt=""/>
         <p className='none'>你还没有收到是任何信息</p>
      </MessageContainer>
    )
  }
   
 }
}
