import React, { Component } from 'react'
import {
	withRouter
} from 'react-router-dom'

import {
	ChangeusrContainer
} from '../../changeUsr/styledusr.js'

import Head from '../../components/Head'
import Input from '../../components/Input'
import trueImg from '../../../../../../assets/img/profile/trueImg.png'
import falseImg from '../../../../../../assets/img/profile/falseImg.png'

class Newpwd extends Component {
	render() {
    return (
      <ChangeusrContainer>
        <Head title='修改密码'></Head>
        <Input placehodler="输入原密码" img={trueImg}></Input>
        <Input placehodler="输入新密码" img={trueImg}></Input>
        <Input placehodler="再次输入新密码" img={falseImg}></Input>
      </ChangeusrContainer>
      
    )
	}
}

export default withRouter(Newpwd)