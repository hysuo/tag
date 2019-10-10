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
	render() {
    return (
      <ChangeusrContainer>
        <Head title='修改绑定手机'></Head>
        <Input placehodler="输入原手机号" img={trueImg}></Input>
        <Inputcode>
          <div>
            <input type="text" placeholder="输入验证码"/>
          </div>
          <div><span>获取验证码</span></div>
        </Inputcode>
        <Input placehodler="输入新手机号" img={falseImg}></Input>
      </ChangeusrContainer>
    )
	}
}

export default withRouter(Newnum)