import Styled from 'styled-components'
import bg from 'img/c/0135d65d2e93fba8012187f4e7dfef.jpg@1280w_1l_2o_100sh.svg'
import bgq from 'img/c/0135d65d2e93fba8012187f4e7dfef.jpg@1280w_1l_2o_100sh@2x.png'
import bgw from 'img/c/0135d65d2e93fba8012187f4e7dfef.jpg@1280w_1l_2o_100sh.png'
import tagq from 'img/c/211569297932_.pic.svg'
import se from 'img/c/搜索.svg'
const IndexContainer= Styled.div `
width:100%;
height:675px;
background:white;
opacity:1;
position:relative
div.div{
    height:2.23rem;
    width:3.75rem;
    background:url(${bg}) no-repeat;

}
header{
width:375px;
height:64px;
background:rgba(255,255,255,1);
opacity:0.5;
text-align:center;
line-height:.64rem;
position:absolute;
top:0
span{
position:absolute;
top:28px;
left:1.48rem;
width:72px;
height:25px;
font-size:18px;
font-family:PingFang SC;
font-weight:bold;
line-height:25px;
color:rgba(25,25,25,1);
opacity:1;
}
}
section{
article{
    width:3.75rem
    height:100px;
    
    padding-left:.19rem;
    padding-right:.21rem;
    position:relative;
    .circle0{
      background:url(${bgq}) no-repeat;
      position:absolute;
      height:100%;
      top:-.11rem;
      bottom:0;
      right:3.16rem;
      width:49px;
     height:130px;
    .circle{
    background:url(${bgw}) no-repeat;
    height:43px;
    width:49px;
    position:absolute;
    top:19px;
    left:2px;
}}
/* .block{
    position :absolute;
    top:9px;
    right:21px;
    height:.8rem;
    width:299px;
    background:pink
} */
}

}
div.mosk{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    z-index:998;
    background-color:#000;
    opacity:0.6;
    display:block;
    }
    div.search{
        position: absolute;
        top:84px;
        right:24px;
        bottom:530px;
        left:25px;
        width:326px;
        height:50px;
        
        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        border-radius:20px;
        padding:8px 10px 8px 10px;
        z-index:999;
        opacity:1;
        background:#fff;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
         input{
            width:263px;
            height:34px;
            background:rgba(229,229,229,1);
            opacity:1;
            border-radius:12px;
            padding-left:15px;
            box-shadow:none;
            border:0;
font-size:18px;
font-family:PingFang SC;
font-weight:bold;
line-height:25px;
color:rgba(25,25,25,1);
opacity:1;
        }
        div{
            /* margin-left:.13rem; */
            width:30px;
            height:30px;
            opacity:1;
            border-radius:20px;
            background:url(${se}) no-repeat;
            background-position:center;
        }

    }
    div.tap{
        width:331px;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        opacity:1;
        border-radius:20px;
        position:absolute;
        top: 164px;right:22px;left:22px;
        padding:30px 12px 15px 12px;
        z-index:998
        .inputbox{
            width:306px;
        height:40px;
        background:rgba(137,195,235,1);
        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        opacity:1;
        border-radius:15px;
        margin-bottom:10px;
        font-size:18px;
        line-height:40px;
        text-align:left;
        padding:0 20px 0 20px;
font-family:PingFang SC;
font-weight:bold;
color:rgba(254,254,254,1);
opacity:1;
.tagq{
    width:14px;
height:14px;
background:rgba(0,0,0,0);
opacity:1;
background: url(${tagq}) no-repeat;
background-position:center;
float:right;
margin-top:13px
margin-bottom:.13rem;
}
        }
        .tip{
            width:100%;
height:20px;
font-size:14px;
font-family:PingFang SC;
font-weight:bold;
line-height:20px;
color:rgba(112,112,112,1);
opacity:1;text-align:center;
        }
    }

`
 export {
    IndexContainer
 }