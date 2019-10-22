import React, { PureComponent } from 'react'
import axios from 'axios'

import {
	withRouter
} from 'react-router-dom'

import {
  Main
} from './dynamic.js'
import headImg from '../../../../../assets/img/profile/headImg.png'
import connect from '../connect'

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
@connect
class Mainer extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      usrItem: []
    }
  }
	render() {
		return (
			<Main>
        <div className="usrinfo">
          <div className="headimg">
            <img src={headImg} alt=""/>
          </div>
          <div className="usrname">
            <p>{this.state.usrItem.usrname}</p>
          </div>
          <div className="signature">
            <p>{this.state.usrItem.signature}</p>
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
  async componentDidMount(){
		let result = await axios.get('/data')
    
    let usrList = result.data
    for(var i = 0, usr; i < usrList.length; i++){
      if(usrList[i].usrname === this.props.usrname){
        usr = usrList[i]
      }
    }
    this.setState({
      usrItem: usr
    })
    labelList.map((value,index) => {
      value.txt = this.state.usrItem.labelList[index]
    })
	}
}

export default withRouter(Mainer)