import React, { Component } from 'react'

import {
	Add
} from './account.js'

import addImg from '../../../../../assets/img/profile/addImg.png'


export default class Addaccount extends Component {
	render() {
		return (
			<Add>
				<div className="addImg">
          <img src={addImg} alt=""/>
				</div>
				<div className="addtxt">
				  <p>添加或注册账号</p>
				</div>
			</Add>
		)
	}
}