import React, { Component } from 'react'

import {
	FootContainer
} from '../Styledprofile/Styledprofile.js'

import labelimg01 from '../../../../assets/img/profile/labelImg-1.png'
import labelimg02 from '../../../../assets/img/profile/labelImg-2.png'
import labelimg03 from '../../../../assets/img/profile/labelImg-3.png'
import labelimg04 from '../../../../assets/img/profile/labelImg-4.png'
import moreImg from '../../../../assets/img/profile/moreImg.png'

const LabelList = [
	{
		LabelImg: labelimg01
	},
	{
		LabelImg: labelimg02
	},
	{
		LabelImg: labelimg03
	},
	{
		LabelImg: labelimg04
	},
	{
		LabelImg: moreImg
	}
]
export default class Foot extends Component{
	render() {
		return (
			<FootContainer>
				<p>常用标签</p>
				<ul>
					{
						LabelList.map((value, index) => {
							return <li
                key={value.LabelImg}
              >
                <img src={value.LabelImg} alt=""/>
              </li>
						})
					}
				</ul>
				
			</FootContainer>
		)
	}
}