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
				<Head title="添加标签"></Head>
				<Input placehodler="#自定义标签" img={cancelImg} getValue={this.getValue}></Input>
			</ChangeusrContainer>
		)
	}
	getValue = () => {
		console.log(1)
	}
}