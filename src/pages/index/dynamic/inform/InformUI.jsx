import React from 'react'
import {InformContainer, CheckShow} from './InformStyled'
import Header from 'pages/index/dynamic/components/header/Header'

export default (props) => {
    let {title, marginLeft} = props;
    return(
        <InformContainer> 
            <Header title={title} marginLeft={marginLeft}></Header>
            <main>
                <CheckShow>
                    <p>广告引流</p>
                    <input type="radio" name="check"/>
                </CheckShow>
                <CheckShow>
                    <p>低俗色情</p>
                    <input type="radio" name="check"/>
                </CheckShow>
                <CheckShow>
                    <p>涉嫌诈骗</p>
                    <input type="radio" name="check"/>
                </CheckShow>
                <CheckShow>
                    <p>侮辱谩骂</p>
                    <input type="radio" name="check"/>
                </CheckShow>
                <CheckShow>
                    <p>恶意刷屏</p>
                    <input type="radio" name="check"/>
                </CheckShow>
                <CheckShow>
                    <p>政治敏感</p>
                    <input type="radio" name="check"/>
                </CheckShow>
                <CheckShow>
                    <p>违法信息</p>
                    <input type="radio" name="check"/>
                </CheckShow>
                <CheckShow>
                    <p>其他</p>
                    <input type="radio" name="check"/>
                </CheckShow>
                <div>
                    提交
                </div>
            </main>
        </InformContainer>
    )
}