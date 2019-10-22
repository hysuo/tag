import React, { Component } from 'react'
import {
	withRouter
} from 'react-router-dom'

import {
	Add
} from './account.js'

import addImg from '../../../../../assets/img/profile/addImg.png'


class Addaccount extends Component {
	render() {
		return (
			<Add>
				<div className="addImg" onClick={() => {
					this.props.history.push('/register')
				}}>
          <img src={addImg} alt=""/>
				</div>
				<div className="addtxt">
				  <p>添加或注册账号</p>
				</div>
			</Add>
		)
	}
}

export default withRouter(Addaccount)