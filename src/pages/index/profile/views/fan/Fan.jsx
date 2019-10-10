import React, { PureComponent } from 'react'

import {
	withRouter
} from 'react-router-dom'

import {
  FllowContainer,
  Input
} from '../follow/follow.js'

import Usrlist from '../follow/Usrlist'
import searchImg from '../../../../../assets/img/profile/searchImg.png'
import backImg from '../../../../../assets/img/profile/back.png'


class Fan extends PureComponent {
  render() {
    return (
      <FllowContainer>
        <header>
          <div>
						<span onClick={() => {
              this.props.history.go(-1)
            }}><img src={backImg} alt=""/></span>
						<p className="title">我的粉丝</p>
            <p className="confirm">确认</p>
          </div>
        </header>
        <Input>
          <div className="search">
            <div>
              <span><img src={searchImg} alt=""/></span>
              <input type="text" placeholder="搜索我的粉丝" />
            </div>
          </div>
           
        </Input>
        <Usrlist></Usrlist>
      </FllowContainer>
    )
  }
}

export default withRouter(Fan)