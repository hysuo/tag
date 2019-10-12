import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {HeaderContainer} from './HeaderStyled'
import goBack from 'assets/img/dynamic/detail/goBack.png'

class Header extends Component {
 render(){
   return (
        <HeaderContainer marginLeft={this.props.marginLeft}>
            <header>
                <div onClick={()=>{this.cancel()}}>
                    <img src={goBack} alt=""/>
                </div>
                <div>{this.props.title}</div>
            </header>
        </HeaderContainer>
   )
 }
 cancel=()=>{
    this.props.history.go(-1)
  }
}

export default withRouter(Header)