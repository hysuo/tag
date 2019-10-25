import React, { PureComponent } from 'react'
import axios from 'axios'

import {
	withRouter
} from 'react-router-dom'

import {
  BodyContainer
} from './dynamic.js'

import dynamic1 from '../../../../../assets/img/profile/dynamic-1.png'
import dynamic2 from '../../../../../assets/img/profile/dynamic-2.png'
import connect from '../connect'

// const dynamicList = [
//   {
//     img: dynamic1,
//     date: '2019-09-16',
//     weather: '晴',
//     txt: '今日份可爱，额嗯嗯呢'
//   },
//   {
//     img: dynamic2,
//     date: '2019-09-15',
//     weather: '阴',
//     txt: '今日份可爱，额嗯嗯呢'
//   },
//   {
//     img: dynamic2,
//     date: '2019-09-14',
//     weather: '晴',
//     txt: '今日份可爱，额嗯嗯呢'
//   },
// ]
@connect 
class Body extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      dynamicList: []
    }
  }
	render() {
		return (
      <BodyContainer>
        {
          
          this.state.dynamicList.length && this.state.dynamicList.map((value, index) => {
            return <div
              key={value.date} 
              className="dynamic_item">
              <div className="dynamicimg">
                <img src={value.img} alt=""/>
              </div>
              <div className="date">
                <span className="left">{value.date}</span>
                <span className="weather">{value.weather}</span>
              </div>
              <div className="content">
                <p>{value.txt}</p>
              </div>
            </div>
          })
        }
        
      </BodyContainer>
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
    this.setState({dynamicList: usr.dynamic.items})
    
    // console.log(this.state.dynamicList.length)
  }
}

export default withRouter(Body)