import React from 'react'
import {ZanContainer} from '../views/DynamicStyled'
import zan from 'assets/img/dynamic/zan.png'
import zanBlue from 'assets/img/dynamic/zanBlue.png'

export default (props)=>{
    let {id, zanList} = props
    if(zanList.length === 0){
        zanList.forEach(element => {
            if(element.id === id){
                return (
                    <ZanContainer>
                        <img src={element.flag?zanBlue:zan} alt=""/>
                    </ZanContainer>
                )
            }
          })
    }else{
        return (
            <ZanContainer>
                <img src={zan} alt=""/>
            </ZanContainer>
        ) 
    }
}