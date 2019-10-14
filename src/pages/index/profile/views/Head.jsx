import React, { PureComponent } from 'react'

import {
  withRouter
} from 'react-router-dom'

import {
  Head
} from '../Styledprofile/Styledprofile.js'

import HeadImg from 'img/profile/headImg.png'
import girllittle from 'img/profile/girllittle.png'
import connect from '../../index/view/connect'
@connect
class Header extends PureComponent {
  render() {
    return (
      <Head>
        <div className="headLeft">
          <img src={HeadImg} alt="" onClick={() => {
            this.props.changeHeadImg()
          }} />
          <div className="sex">
            <img src={girllittle} alt="" onClick={() => {
              this.props.changeSex()
            }} />
          </div>
        </div>
        <div className="headRight">
          <div className="username" onClick={() => this.handleClick('/profile/username')}>{this.props.usr}</div>
          <div className="signature" onClick={() => this.handleClick('/profile/signature')}>{this.props.snt}</div>
        </div>
      </Head>
    )
  }
  handleClick(name){
    this.props.history.push(name)
  }
    
  
}

export default withRouter(Header)