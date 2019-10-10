import React from 'react'
import {IndexContainer} from './StyledIndex'
import Tag from 'components/tag/Tag'
export default (props)=>{
    return (
        <IndexContainer>
            <div className="div"></div>
            <div className="mosk"></div>
<div className="search">
    <input type="text"/>
    <div></div>
</div>
        <div className= "tap">
            <div className="inputbox"><div className="tagq"></div></div>
            <div className="tip">na~~~jiuzhemeduole</div>
        </div>
<div>
            </div>
            <header><span>真的植草</span></header>
            <section>
                <article>
                <div className="circle0">
                    <div className="circle">
                    </div>
                </div>
                
                <Tag spanbox="aoyehish" spanbox1="sgdhsf"></Tag>
            </article>
            <article>
                <div className="circle0">
                    <div className="circle">
                    </div>
                </div>
                <Tag spanbox="aoyehish" spanbox1="sgdhsf"></Tag>
            </article>
            </section>
        </IndexContainer>
    )
}