import React from 'react'
import {PublishDynamicContainer} from './PublishDynamicStyled'
import goBack from 'assets/img/publish/dy/211569297932_.pic.png'
import defaultImg from 'assets/img/publish/dy/TAGTAG.png'
import deleteImgs from 'assets/img/publish/dy/组 636.png'
import wrap from 'assets/img/publish/dy/矩形 566.png'
import add from 'assets/img/publish/dy/组 635.png'
import merge from 'assets/img/publish/dy/收起.png'
import hidden from 'assets/img/publish/dy/hidden (1).png'

import Photo from 'components/photo/Photo'
export default (props) => {
    let {cancel, isShow, flag, isShowCue, flagCue, flagTag, isShowTag, isShowAdd, flagAdd, isDeleteImg, deleteImg} = props
    return(
        <PublishDynamicContainer>
            <Photo flagAdd={flagAdd} isShowAdd={isShowAdd}></Photo>
            <header>
                <div onClick={()=>{cancel()}}>
                    <img src={goBack} alt=""/>
                </div>
                <div>动态</div>
                <div>发布</div>
            </header>
            <main>
                <textarea className={flagCue||flagTag ? 'active':''} name="" id="" cols="40" rows="20" placeholder='你的小秘密：'></textarea>
                <div className={flagTag? 'addTag active' : 'addTag'}>
                    <div>
                        <div onClick={()=>{isShowTag()}}>取消</div>
                        <div>添加标签</div>
                        <div>添加</div>
                    </div>
                    <div>
                        <input type="text" placeholder='#添加一个符合你自己的标签吧'/>
                    </div>
                    <div className='tuijianTag'>
                        <div>推荐标签</div>
                        <div>
                            <div>柠檬精</div>
                            <div>柠檬精</div>
                            <div>柠檬精</div>
                            <div>柠檬精</div>
                        </div>
                    </div>
                </div>
                <div className={flagCue? 'cueOne active' : 'cueOne'}>
                    <div>
                        <div onClick={()=>{isShowCue()}}>取消</div>
                        <div>提醒谁看</div>
                        <div>确定</div>
                    </div>
                    <div>
                        <input type="text" placeholder='搜索签名或备注'/>
                    </div>
                </div>
            </main>
            <footer>
                <div>
                    <div>
                        <div className={deleteImg? 'active' : ''}>
                            <img src={defaultImg} alt=""/>
                            <img src={deleteImgs} alt="" onClick={()=>{isDeleteImg()}}/>
                        </div>
                        <div onClick={()=>{isShowAdd()}}>
                            <img src={wrap} alt=""/>
                            <img src={add} alt=""/>
                        </div>
                    </div>
                    <div>
                        <div>
                            #添加标签
                        </div>
                        <div>
                            @Ta
                        </div>
                        <div>
                            <p>可见范围</p>
                            <div className={!flag ? 'active': ''}>
                                <div>
                                    <p>所有人可见</p><input name="range" type="radio" value=""/>
                                </div>
                                <div> 
                                    <p>仅自己可见</p><input name="range" type="radio" value="" />
                                </div>
                                <div>
                                    <p>互关可见</p><input name="range" type="radio" value="" />
                                </div>
                            </div>
                        </div>
                        <img onClick={()=>{isShow()}} src={flag? merge : hidden} alt=""/>
                    </div>
                </div>
                <div>
                    <input type="text" placeholder="回复小雅："/>
                    <button>发送</button>
                </div>
            </footer>
        </PublishDynamicContainer>
    )
}