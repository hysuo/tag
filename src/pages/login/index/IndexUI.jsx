import React from 'react'
import {IndexContainer} from './StyledIndex'
import Page from './components/Page'
import Tag from './components/Tag'
export default (props)=>{
    return (
        <IndexContainer>
            <Tag></Tag>
            <Page></Page>
        </IndexContainer>
    )
}
