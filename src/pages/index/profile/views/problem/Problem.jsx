import React, { Component } from 'react'

import {
	ProblemContainer
} from './problem.js'

import Noconfirm from '../components/Noconfirm'
import add from '../../../../../assets/img/profile/add.png'

export default class Proble extends Component {
	render() {
		return (
			<ProblemContainer>
        <Noconfirm title='用户反馈'></Noconfirm>
        <div className="main">
          <textarea name="" id="" cols="47" rows="12" placeholder="请写下您的意见或建议">
          </textarea>
          <div className="add">
            <img src={add} alt=""/>
          </div>
        </div>
        <div className="submit" onClick={() => {
          this.props.history.go(-1)
        }}>
          <p>提交</p>
        </div>
      </ProblemContainer>
		)
	}
}