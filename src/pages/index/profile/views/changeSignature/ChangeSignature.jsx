import React, { Component } from 'react'

import {
	ChangeusrContainer
} from '../changeUsr/styledusr.js'

import cancelImg from '../../../../../assets/img/profile/cancel.png'

import Head from '../components/Head'
import Input from '../components/Input'

export default class ChangeUsr extends Component {
	render() {
		return (
			<ChangeusrContainer>
				<Head title="更改签名"></Head>
				<Input placehodler="请输入新签名" img={cancelImg}></Input>
			</ChangeusrContainer>
		)
	}
}