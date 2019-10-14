import React from 'react'
import {HomeContainer} from './HomeStyled'
import more from 'assets/img/home1/gengduo.png'
import logo from 'assets/img/home1/TAGTAG.png'
import search from 'assets/img/home1/搜索.png'
import hot from 'assets/img/home1/shandian.png'
import dianzan from 'assets/img/home1/dianzan-yuanshijituantubiao.png'
import xiaolian from 'assets/img/home1/xiaolian.png'
import yanjing from 'assets/img/home1/yanjing.png'
import go from 'assets/img/home1/微信图片_20190919090717.png'
import img1 from 'assets/img/home1/01f97a5d2e93f3a80120695cf04d1d.jpg@1280w_1l_2o_100sh.png'

import Banner from './components/swiper/SwiperContainer'

export default (props) => {
    let {weChat,cate,account} = props
    return(
        <HomeContainer>
            
           <header>
               <div onClick={()=>{account()}}>
                   <img src={more} alt=""/>
               </div>
               <div>
                   <img src={logo} alt=""/>
               </div>
               <div>
                   <img src={search} alt=""/>
               </div>
           </header>
           <main>
                <Banner></Banner>
                <div>
                    <div onClick={()=>{cate()}}>
                        <img src={hot} alt=""/>
                        <p>热词霸主</p>
                    </div>
                    <div onClick={()=>{cate()}}>
                        <img src={dianzan} alt=""/>
                        <p>请你表扬</p>
                    </div>
                    <div onClick={()=>{cate()}}>
                        <img src={xiaolian} alt=""/>
                        <p>朕的自嘲</p>
                    </div>
                    <div onClick={()=>{cate()}}>
                        <img src={yanjing} alt=""/>
                        <p>复古主义</p>
                    </div>
                </div>
                <div>
                    <div>
                        我的收藏
                    </div>
                    <div>
                        <div onClick={()=>{weChat()}}>
                            <img src={img1} alt=""/>
                            <div>
                                <div>
                                    <p>积极废人</p>
                                    <p>860人在线</p>
                                </div>
                                <div>
                                    <img src={go} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>{weChat()}}>
                            <img src={img1} alt=""/>
                            <div>
                                <div>
                                    <p>积极废人</p>
                                    <p>860人在线</p>
                                </div>
                                <div>
                                    <img src={go} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>{weChat()}}>
                            <img src={img1} alt=""/>
                            <div>
                                <div>
                                    <p>积极废人</p>
                                    <p>860人在线</p>
                                </div>
                                <div>
                                    <img src={go} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>{weChat()}}>
                            <img src={img1} alt=""/>
                            <div>
                                <div>
                                    <p>积极废人</p>
                                    <p>860人在线</p>
                                </div>
                                <div>
                                    <img src={go} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>{weChat()}}>
                            <img src={img1} alt=""/>
                            <div>
                                <div>
                                    <p>积极废人</p>
                                    <p>860人在线</p>
                                </div>
                                <div>
                                    <img src={go} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </main>
        </HomeContainer>
        
    )
}