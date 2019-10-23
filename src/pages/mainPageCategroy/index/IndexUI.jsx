import React from 'react'
import MainPageCategory from './components/MainPageCategory'

export default (props)=>{
    return (
        // <IndexContainer>
        //     <div className="div"></div>
        //     <div className="mosk"></div>
        //     <div className="search">
        //         <input type="text"/>
        //     <div></div>
        //     </div>
        //     <div className= "tap">
        //     <div className="inputbox">
        //         <div className="tagq"></div>
        //     </div>
        //     <div className="tip">na~~~jiuzhemeduole</div>
        // </div>
        // <div>
        //     </div>
        //     <header><span>真的植草</span><div className="searchbox0" onClick={this.handleSearchTag}></div></header>
        //     <section>
        //         <article>
        //         <div className="circle0">
        //             <div className="circle">
        //             </div>
        //         </div>
                
        //         <Tag spanbox="退役熬夜运动员" spanbox1="999位成员已参加"></Tag>
        //     </article>
        //     <article>
        //         <div className="circle0">
        //             <div className="circle">
        //             </div>
        //         </div>
        //         <Tag spanbox="退役熬夜运动员" spanbox1="999位成员已参加"></Tag>
        //     </article>
        //     </section>
        // </IndexContainer>
        <MainPageCategory datatag={props.data}></MainPageCategory>
    )
}