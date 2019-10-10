import React, { PureComponent } from 'react'

import {
	withRouter
} from 'react-router-dom'

import {
  Main
} from './dynamic.js'
import headImg from '../../../../../assets/img/profile/headImg.png'

const labelList = [
  {
    txt: '杠精',
    className: 'label-1 label'
  },
  {
    txt: '柠檬精',
    className: 'label-2 label'
  },
  {
    txt: '熬夜退役选手',
    className: 'label-3 label'
  },
  {
    txt: '键盘侠',
    className: 'label-4 label'
  },
]
class Mainer extends PureComponent {
	render() {
		return (
			<Main>
        <div className="usrinfo">
          <div className="headimg">
            <img src={headImg} alt=""/>
          </div>
          <div className="usrname">
            <p>KUOLUO</p>
          </div>
          <div className="signature">
            <p>我阔落要加冰啊</p>
          </div>
          {
            labelList.map((value, index) => {
              return <div
                key={value.txt}
                className={value.className}>
                <p>{value.txt}</p>  
              </div>  
            })
          }
        </div>	
      </Main>
		)
	}
}

export default withRouter(Mainer)