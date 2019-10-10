import React, { PureComponent } from 'react'

import {
	withRouter
} from 'react-router-dom'

import {
  Head
} from './dynamic.js'
import goback from '../../../../../assets/img/profile/goback.png'

class Header extends PureComponent {
	render() {
		return (
			<Head>
        <div>
          <span onClick={() => {
            this.props.history.go(-1)
          }}>
            <img src={goback} alt=""/></span>
            <p className="dymc">动态</p>
            <p className="confirm">确认</p>
        </div>	
      </Head>
		)
	}
}

export default withRouter(Header)