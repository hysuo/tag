import React from 'react'
import {IndexContainer} from '../../login/index/StyledIndex'
import Register from './components/Register'
import Tag from '../../login/index/components/Tag'
export default (props)=>{
    return (
        <IndexContainer>
            <Tag></Tag>
            <Register></Register>
        </IndexContainer>
    )
}
