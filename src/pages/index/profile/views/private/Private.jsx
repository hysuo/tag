import React, { Component } from 'react'
import { List, Switch } from 'antd-mobile';
// import { createForm } from 'rc-form';

import {
		withRouter
} from 'react-router-dom'

import {
		PrivateContainer
} from './private.js'

import Noconfirm from '../components/Noconfirm'
import nextImg from 'img/profile/next.png'

class Private extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checked1: true,
    };
  }
	render() {
		return (
			<PrivateContainer>
        <Noconfirm title="隐私设置"></Noconfirm>
        <div className='main'>
          <div className="antList">
            <List.Item
                extra={<Switch
                  checked={this.state.checked}
                  onChange={() => {
                    this.setState({
                      checked: !this.state.checked,
                    });
                  }}
                />}
              >主页显示我的动态</List.Item>
          </div>
        </div>
        <div className="bot">
          <p>陌生人权限</p>
          <span onClick={() => this.handleCick('/profile/strangelimit')}><img src={nextImg} alt=""/></span>
        </div>
      </PrivateContainer>
		)
  }
  handleCick(path) {
    this.props.history.push(path)
  }
}
export default withRouter(Private)