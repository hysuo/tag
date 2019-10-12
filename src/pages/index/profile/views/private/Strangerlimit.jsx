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


class Private extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  checked: false,
	  checked1: false,
	};
  }
	render() {
		return (
			<PrivateContainer>
        <Noconfirm title="陌生人权限"></Noconfirm>
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
              >查看我的动态</List.Item>
          </div>
          <div className="antList">
            <List.Item
              extra={<Switch
                checked={this.state.checked1}
                onChange={() => {
                this.setState({
                  checked1: !this.state.checked1,
                });
                }}
              />}
              >是否可以关注我</List.Item>
          </div>
        </div>
	    </PrivateContainer>
		)
  }
}
export default withRouter(Private)