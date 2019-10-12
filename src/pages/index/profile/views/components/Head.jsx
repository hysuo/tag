import React, { PureComponent } from 'react'
import backImg from '../../../../../assets/img/profile/back.png'
import {
		Head
} from '../changeUsr/styledusr.js'

import {
  withRouter
} from 'react-router-dom'

class Header extends PureComponent{
		render() {
			return (
        <Head>
          <div>
            <span onClick={() => this.handleClick()}><img src={backImg} alt=""/></span>
            <p className="usr">{this.props.title}</p>
            <p className="confirm" onClick={() => this.handleClick()}>确认</p>
          </div>	
        </Head>
      )
    }
    handleClick(){
      this.props.history.go(-1)
    }
}

export default withRouter(Header)