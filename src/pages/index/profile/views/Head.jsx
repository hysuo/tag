import React, { PureComponent } from 'react'

import {
  withRouter
} from 'react-router-dom'

import {
  Head
} from '../Styledprofile/Styledprofile.js'

import HeadImg from '../../../../assets/img/profile/headImg.png'
class Header extends PureComponent {
  render() {
    return (
      <Head>
        <div className="headLeft">
          <img src={HeadImg} alt=""/>
        </div>
        <div className="headRight">
          <div className="username" onClick={() => this.handleClick('/profile/username')}>kuoluo</div>
          <div className="signature" onClick={() => this.handleClick('/profile/signature')}>人在塔在</div>
        </div>
      </Head>
    )
  }
  handleClick(name){
    this.props.history.push(name)
  }
    
  
}

export default withRouter(Header)