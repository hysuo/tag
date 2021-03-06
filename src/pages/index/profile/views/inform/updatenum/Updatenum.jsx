import React, { Component } from 'react'
import {
	withRouter
} from 'react-router-dom'

import {
	ChangeusrContainer
} from '../../changeUsr/styledusr.js'

import {
  Inputcode
} from './Inputcode.js'

import Head from '../../components/Head'
import Input from '../../components/Input'
import trueImg from '../../../../../../assets/img/profile/trueImg.png'
import falseImg from '../../../../../../assets/img/profile/falseImg.png'

class Newnum extends Component {
  constructor(props){
    super(props)
    this.state = {
      oldnum: '1111111',
      newnum: '2222222',
      verificationCode: ''
    }
  }
	render() {
    return (
      <ChangeusrContainer>
        <Head title='修改绑定手机' handclick={this.handleClick}></Head>
        <Input placehodler="输入原手机号" img={trueImg} getValue={this.getValue}></Input>
        <Inputcode>
          <div>
            <input type="text" placeholder="输入验证码"/>
          </div>
          <div><span>获取验证码</span></div>
        </Inputcode>
        <Input placehodler="输入新手机号" img={falseImg} getValue={this.getValue}></Input>
      </ChangeusrContainer>
    )
  }
  handleClick = () => {
    this.props.history.go(-1)
  }
  getValue = (value) => {
    console.log(value)
  }
}

export default withRouter(Newnum)