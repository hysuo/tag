import React from 'react'
import {PublishTagContainer, ThreeInput} from './PublishTagStyled'
import goBack from 'assets/img/publish/tag/20190919090717.png'
import huati from 'assets/img/publish/tag/huati.png'
import xuanze from 'assets/img/publish/tag/xuanzebiaoqian-2.png'
import dui from 'assets/img/publish/tag/dui.png'
import cuo from 'assets/img/publish/tag/cuo.png'
export default (props) => {
    let {cancel,handleClick,SelectTag, ClickTag,Tag, audit,notifyShow,blur,blurShow,focus,inputValue, change, existed} = props
    return(
        <PublishTagContainer>
            <div className={notifyShow?'notify active':'notify'} onClick={()=>audit()}></div>
            <div className={notifyShow?'ntifyDetail active':'ntifyDetail'}>审核提交成功，大约需要1-3个工作日给予回复~</div>
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
                        <input type="text" placeholder="创建个标签名字" onBlur={()=>blur()} onFocus={()=>focus()}  value={inputValue} onChange={change.bind(this)}/ >
                    </div>
                    <img className={blurShow ? 'active' : ''} src={existed ? cuo : dui} alt=""/>
                </ThreeInput>
                {/* <ThreeInput>
                    <div>
                        <img src={huati} alt=""/>
                        <input type="text" placeholder="设计师没想到这条是什么"/>
                    </div>
                    <img src={cuo} alt=""/>
                </ThreeInput> */}
                <ThreeInput>
                    <div onClick={()=>handleClick()}>
                        <img src={xuanze} alt=""/>
                        <input type="text" placeholder="选择一下你是什么标签" value={Tag} readOnly/>
                    </div>
                </ThreeInput>
                <ul className={SelectTag?'active':''}>
                    <li onClick={ClickTag.bind(this)}>热词霸主</li>
                    <li onClick={ClickTag.bind(this)}>请你表扬</li>
                    <li onClick={ClickTag.bind(this)}>朕的自嘲</li>
                    <li onClick={ClickTag.bind(this)}>复古主义</li>
                </ul>
                <div onClick={()=>audit()}>
                    快帮我审核
                </div>
            </main>)
        </PublishTagContainer>
    )
}