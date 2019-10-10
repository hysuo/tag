import React, { PureComponent } from 'react'
import backImg from '../../../../../assets/img/profile/back.png'
import {
		Noconfirm
} from '../styles/Noconfirm.js'

import {
  withRouter
} from 'react-router-dom'

class Header extends PureComponent{
		render() {
				return (
					<Noconfirm>
						<div>
							<span onClick={() => this.handleClick()}><img src={backImg} alt=""/></span>
							<p className="title">{this.props.title}</p>
              <p className="confirm">确认</p>
						</div>	
					</Noconfirm>
				)
	}
	handleClick(){
	  this.props.history.go(-1)
	}
}

export default withRouter(Header)