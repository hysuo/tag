import React, { Component } from 'react'

import back from 'assets/img/msg/chat/back.png'
import cancel from 'assets/img/msg/chat/cancel.png'

import {ChangeNameContainer,SearchContainer} from './changeStyled'
import connect  from './connect';
@connect
class ChangeName extends Component {
 render(){
   return (
     <ChangeNameContainer>
       <header>
        <div>
          <img src={back} alt="" onClick={()=>{this.props.history.go(-1)}}/>
        </div>
        <p>修改备注</p>
        <p>确认</p>
      </header>
      <SearchContainer>
        <div>
          <input type="text" onBlur={this.Change} ref='changename' placeholder='修改备注'></input>
          <img src={cancel} alt=""/>
        </div>
      </SearchContainer>
     </ChangeNameContainer>
   )
 }
 Change=()=>{

 }
}
export default ChangeName