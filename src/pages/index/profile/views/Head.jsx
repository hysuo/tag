import React, { PureComponent } from 'react'

import {
  withRouter
} from 'react-router-dom'

import {
  Head
} from '../Styledprofile/Styledprofile.js'

import HeadImg from 'img/profile/headImg.png'
import girlImg from 'img/profile/girllittle.png'
import boyImg from 'img/profile/boylittle.png'
import secrecyImg from 'img/profile/secrecylittle.png'
import connect from '../../index/view/connect'



@connect
class Header extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      boy: boyImg,
      girl: girlImg,
      secrecy: secrecyImg
    }
  }
  render() {
    return (
      <Head>
        <div className="headLeft">
          <img src={HeadImg} alt="" onClick={() => {
            this.props.changeHeadImg(this.props.sex)
          }} />
          <div className="sex">
            {
              <img src={this.state[this.props.sex]} alt="" onClick={() => {
                this.props.changeSex(this.props.sex)
                console.log(this.props.sex)
              }} />
            }
            
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