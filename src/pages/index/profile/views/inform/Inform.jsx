import React, { Component } from 'react'
import {
  withRouter
} from 'react-router-dom'

import {
	InformContainer
} from './imform.js'

import Noconfirm from '../components/Noconfirm'
import Main from './main.jsx'

class Inform extends Component {
	render() {
		return (
			<InformContainer>
				<Noconfirm title="更改个人信息"></Noconfirm>
        <Main></Main>
			</InformContainer>
		)
	}
}
export default withRouter(Inform)