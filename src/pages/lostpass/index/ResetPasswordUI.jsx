import React from 'react'
import {IndexContainer} from '../../login/index/StyledIndex'
import ResetPassword from './components/ResetPassword'
import Tag from '../../login/index/components/Tag'
export default (props)=>{
    return (
        <IndexContainer>
            <Tag></Tag>
            <ResetPassword></ResetPassword>
        </IndexContainer>
    )
}
