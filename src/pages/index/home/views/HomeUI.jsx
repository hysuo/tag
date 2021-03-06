import React from 'react'
import {HomeContainer} from './HomeStyled'
import more from 'assets/img/home1/gengduo.png'
import logo from 'assets/img/home1/TAGTAG.png'
import search from 'assets/img/home1/搜索.png' 
import go from 'assets/img/home1/微信图片_20190919090717.png'

import Banner from './components/Swiper'

export default (props) => {
    let {weChat,cate,account, tagList, tags, searchFlag, clickSearch, changInput, inputValue, searchTag} = props
    return(
        <HomeContainer>
        <div onClick={()=>{clickSearch()}} className={searchFlag?'active':''}></div>
        <div className={searchFlag?'active':''}>
            <div>
                <input type="text" value={inputValue} onChange={changInput.bind(this)}/>
                <img src={search} alt=""/>
            </div>
            <div>
                <div>
                    {
                        searchTag.map((value, index)=>(
                            <div key={value.id+index} onClick={()=>{weChat(value.id,value.name)}} >{value.name}</div>
                        ))
                    }
                </div>
                <div>
                    呐~就这么多
                </div>
            </div>
        </div>
           <header>
               <div onClick={()=>{account()}}>
                   <img src={more} alt=""/>
               </div>
               <div>
                   <img src={logo} alt=""/>
               </div>
               <div>
                   <img onClick={()=>{clickSearch()}} src={search} alt=""/>
               </div>
           </header>
           <main>
                <Banner></Banner>
                <div>
                    {
                        tagList.map((value, index) => (
                            <div onClick={()=>{cate(value.id)}} key={value.name}>
                                <img src={value.img} alt=""/>
                                <p>{value.name}</p>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div>
                        我的收藏
                    </div>
                    <div>
                    {
                        tags.map((value, index) => (
                            <div onClick={()=>{weChat(value.id,value.name)}} key={value.id}>
                                <img src={value.img} alt=""/>
                                <div>
                                    <div>
                                        <p>{value.name}</p>
                                        <p>{value.onlinePerson}人在线</p>
                                    </div>
                                    <div>
                                        <img src={go} alt=""/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
           </main>
        </HomeContainer>
        
    )
}