import React, { Component } from 'react'

import {
  NoneBorderContainer
} from './StyledInput'

export default class Inputbox extends Component {
  render() {
    if (this.props.getValidate==="1") {
      return  (
        <NoneBorderContainer {...this.props}>
          <i><img src={this.props.iconbeforebg} alt=""/></i>
          <input type="text" placeholder={this.props.placeholder}/>          
               <div><span id="q">{this.props.handle}</span></div>                      
        </NoneBorderContainer>
      )
    }else if (this.props.getValidate==="2") {
      return  (
        <NoneBorderContainer {...this.props}>
          <i><img src={this.props.iconbeforebg} alt=""/></i>
          <input type="text" placeholder={this.props.placeholder}/>          
               <div><span id="q">{this.state.handle}</span></div>                      
        </NoneBorderContainer>
      )
    }else{
      return (
        <NoneBorderContainer {...this.props}>
          <i><img src={this.props.iconbeforebg} alt=""/></i>
          <input type={this.props.type} placeholder={this.props.placeholder}/>        
             <b><img src={this.props.iconlastbg?this.props.iconlastbg:''} alt="" onClick={this.props.handleq}/></b>           
        </NoneBorderContainer>
      )
  }
    
  }
}
