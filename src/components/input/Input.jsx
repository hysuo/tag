import React, { Component } from 'react'

import {
  NoneBorderContainer
} from './StyledInput'

export default class Inputbox extends Component {
  render() {
    if (this.props.getValidate==="1") {
      return  (
        <NoneBorderContainer {...this.props}>
          <i></i>
          <input type="text" placeholder={this.props.placeholder}/>          
               <div><span id="q">获取验证码</span></div>                      
        </NoneBorderContainer>
      )
    }else if (this.props.getValidate==="2") {
      return  (
        <NoneBorderContainer {...this.props}>
          <i></i>
          <input type="text" placeholder={this.props.placeholder}/>          
               <div><span id="q">获取验证码</span></div>                      
        </NoneBorderContainer>
      )
    }else{
      return (
        <NoneBorderContainer {...this.props}>
          <i></i>
          <input type={this.props.type} placeholder={this.props.placeholder}/>        
             <b></b>           
        </NoneBorderContainer>
      )
  }
    
  }
}
