import React, { Component } from 'react'

import {
	FootContainer
} from '../Styledprofile/Styledprofile.js'
import {
  withRouter
} from 'react-router-dom'

import labelimg01 from '../../../../assets/img/profile/labelImg-1.png'
import labelimg02 from '../../../../assets/img/profile/labelImg-2.png'
import labelimg03 from '../../../../assets/img/profile/labelImg-3.png'
import labelimg04 from '../../../../assets/img/profile/labelImg-4.png'
import moreImg from '../../../../assets/img/profile/moreImg.png'

const LabelList = [
	{
    LabelImg: labelimg01,
    id: '1'
	},
	{
    LabelImg: labelimg02,
    id: '2'
	},
	{
    LabelImg: labelimg03,
    id: '3'
	},
	{
    LabelImg: labelimg04,
    id: '4'
	},
	{
    LabelImg: moreImg,
    id: '5'
	}
]
class Foot extends Component{
	render() {
		return (
			<FootContainer>
				<p>常用标签</p>
				<ul>
					{
						LabelList.map((value, index) => {
							return <li
                key={value.LabelImg}
                onClick={() => this.handleClick(value.id)}
              >
                <img src={value.LabelImg} alt=""/>
              </li>
						})
					}
				</ul>
				
			</FootContainer>
		)
  }
  handleClick(id){
    if(id === '5'){
      this.props.history.push('/profile/addlabel')
    }
  }
}

export default withRouter(Foot)