import React from 'react'
import {PublishTagContainer, ThreeInput} from './PublishTagStyled'
import goBack from 'assets/img/publish/tag/20190919090717.png'
import huati from 'assets/img/publish/tag/huati.png'
import xuanze from 'assets/img/publish/tag/xuanzebiaoqian-2.png'
import dui from 'assets/img/publish/tag/dui.png'
import cuo from 'assets/img/publish/tag/cuo.png'
export default (props) => {
    let {cancel} = props
    return(
        <PublishTagContainer>
            <header>
                <div>
                    <img src={goBack} onClick={()=>{cancel()}} alt=""/>
                </div>
                <div>创建个标签</div>
            </header>
            <main>
                <div>
                    是你，我的梦中才子/女
                </div>
                <ThreeInput>
                    <div>
                        <img src={huati} alt=""/>
                        <input type="text" placeholder="创建个标签名字"/>
                    </div>
                    <img src={dui} alt=""/>
                </ThreeInput>
                <ThreeInput>
                    <div>
                        <img src={huati} alt=""/>
                        <input type="text" placeholder="设计师没想到这条是什么"/>
                    </div>
                    <img src={cuo} alt=""/>
                </ThreeInput>
                <ThreeInput>
                    <div>
                        <img src={xuanze} alt=""/>
                        <input type="text" placeholder="选择一下你是什么标签"/>
                    </div>
                </ThreeInput>
                <div>
                    快帮我审核
                </div>
            </main>
        </PublishTagContainer>
    )
}