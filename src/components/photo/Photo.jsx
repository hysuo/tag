import React, {Component} from 'react'
import {PhotoShow} from './PhotoStyled' 
import PhotoImg from 'assets/img/photo/photoImg1@2x.png'
import PhotoImg2 from 'assets/img/photo/photoImg2@2x.png'

export default class Photo extends Component{
    render(){
        return(
            <PhotoShow>
                <div className={this.props.flagAdd?'active':''}></div>
                <div className={this.props.flagAdd?'active':''}>
                    <div>
                        <img src={PhotoImg} alt=""/>
                        <p>拍照</p>
                    </div>
                    <div>
                        <img src={PhotoImg2} alt=""/>
                        <p>图库</p>
                    </div>
                    <div onClick={()=>{this.props.isShowAdd()}}>
                        <p>取消</p>
                    </div>
                </div>
            </PhotoShow>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}