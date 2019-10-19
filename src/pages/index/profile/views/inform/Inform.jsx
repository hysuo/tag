import React, { Component } from 'react'
import {
  withRouter
} from 'react-router-dom'

import {
	InformContainer
} from './imform.js'

// import Noconfirm from '../components/Noconfirm'
import Main from './main.jsx'
import backImg from 'img/profile/back.png'

class Inform extends Component {
	render() {
		return (
			<InformContainer>
				<header>
					<div>
						<span onClick={() => {this.props.history.go(-1)}}><img src={backImg} alt=""/></span>
						<p className="title">更改个人信息</p>
						<p className="confirm">确认</p>
					</div>
				</header>	
        <Main></Main>
			</InformContainer>
		)
	}
}
export default withRouter(Inform)