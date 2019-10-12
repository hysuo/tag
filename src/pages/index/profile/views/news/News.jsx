import React, { Component } from 'react'
import { List, Switch } from 'antd-mobile';
// import { createForm } from 'rc-form';

import {
		withRouter
} from 'react-router-dom'

import {
		PrivateContainer
} from '../private/private.js'

import Noconfirm from '../components/Noconfirm'


class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      checked1: false,
      checked2: false
    };
  }
	render() {
		return (
			<PrivateContainer>
        <Noconfirm title="消息提醒"></Noconfirm>
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
            >接受所有消息</List.Item>
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
              >只接受关注我的人的消息</List.Item>
          </div>
          <div className="antList">
            <List.Item
              extra={<Switch
              checked={this.state.checked2}
              onChange={() => {
                this.setState({
                  checked2: !this.state.checked2,
                });
                }}
              />}
              >只接受我关注的人的消息</List.Item>
          </div>
        </div>
      </PrivateContainer> 
		)
  }
}
export default withRouter(News)