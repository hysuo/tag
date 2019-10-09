import React, { Component } from 'react'
import {MsgClassifyContainer} from '../MsgStyled'

import sixin from 'assets/img/msg/sixin.png'
import xitong from 'assets/img/msg/xitong.png'
import tuisong from 'assets/img/msg/tuisong.png'

export default class Msgclassify extends Component {
 render(){
  let {handleClick,pathname} = this.props
   return (
     <MsgClassifyContainer>
         <div className={pathname === '/index/msg/sixin' ? 'active' : ''} onClick={() => handleClick('/sixin')}>
             <img src={sixin} alt=""/>
             <div>私信</div>
         </div>
         <div className={pathname === '/index/msg/xitong' ? 'active' : ''} onClick={() => handleClick('/xitong')}>
             <img src={xitong} alt=""/>
             <div>系统消息</div>
         </div>
         <div className={pathname === '/index/msg/tuisong' ? 'active' : ''} onClick={() => handleClick('/tuisong')}>
             <img src={tuisong} alt=""/>
             <div>推送</div>
         </div>
     </MsgClassifyContainer>
   )
 }
}
