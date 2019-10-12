import Styled from 'styled-components'
import bg from 'img/c/0135d65d2e93fba8012187f4e7dfef.jpg@1280w_1l_2o_100sh.svg'
import bgq from 'img/c/0135d65d2e93fba8012187f4e7dfef.jpg@1280w_1l_2o_100sh@2x.png'
import bgw from 'img/c/0135d65d2e93fba8012187f4e7dfef.jpg@1280w_1l_2o_100sh.png'
import tagq from 'img/c/211569297932_.pic.svg'
import se from 'img/c/搜索.svg'
const IndexContainer= Styled.div `
width:100%;
height:100%;
background:white;
overflow-y:hidden;
opacity:1;
position:relative;
display:flex;
flex-direction:column;
div.div{
    height:2.23rem;
    width:3.75rem;
    background:url(${bg}) no-repeat;
    overflow-y:hidden;
}
header{
width:3.75rem;
height:.64rem;
background:rgba(255,255,255,1);
opacity:0.5;
text-align:center;
line-height:.64rem;
position:absolute;
top:0
span{
position:absolute;
top:.28rem;
left:1.48rem;
width:.72rem;
height:.25rem;
font-size:.18rem;
font-family:PingFang SC;
font-weight:bold;
line-height:.25rem;
color:rgba(25,25,25,1);
opacity:1;
}
.searchbox0{
width:.24rem;
height:.24rem;
background:rgba(0,0,0,0);
opacity:1;
background:url(${se}) no-repeat;
background-position:center;
margin:.29rem .20rem .11rem 3.36rem;
}
}
section{
    overflow-y:scroll;
    flex:1;
    /* overflow-y:scroll; */
    div{height:100%;
article{
    width:3.75rem
    height:1rem;
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
      width:.49rem;
     height:1.30rem;
    .circle{
    background:url(${bgw}) no-repeat;
    height:.43rem;
    width:.49rem;
    position:absolute;
    top:.19rem;
    left:.02rem;
}}
/* .block{
    position :absolute;
    top:9px;
    right:21px;
    height:.8rem;
    width:299px;
    background:pink
} */
}}

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
    display:${props=>props.hide===true?'none':'block'};
    }
    div.search{
        position: absolute;
        top:.84rem;
        right:.24rem;
        /* bottom:5.3rem; */
        left:.25rem;
        width:3.26rem;
        height:.5rem;
        box-shadow:0 .03rem .06rem rgba(0,0,0,0.16);
        border-radius:.2rem;
        padding:.08rem .1rem .08rem .1rem;
        z-index:999;
        opacity:1;
        background:#fff;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        display:${props=>props.hide===true?'none':'flex'}
         input{
            width:2.63rem;
            height:.34rem;
            background:rgba(229,229,229,1);
            opacity:1;
            border-radius:.12rem;
            padding-left:.15rem;
            box-shadow:none;
            border:0;
            font-size:.18rem;
            font-family:PingFang SC;
            font-weight:bold;
            line-height:.25rem;
            color:rgba(25,25,25,1);
            opacity:1;
        }
        div{
            /* margin-left:.13rem; */
            width:.3rem;
            height:.3rem;
            opacity:1;
            border-radius:.2rem;
            background:url(${se}) no-repeat;
            background-position:center;
        }

    }
    div.tap{
        width:3.31rem;
        background:rgba(255,255,255,1);
        box-shadow:0 .03rem .06rem rgba(0,0,0,0.16);
        opacity:1;
        border-radius:.2rem;
        position:absolute;
        top:1.64rem;right:.22rem;left:.22rem;
        padding:.3rem .12rem .15rem .12rem;
        display:${props=>props.hide===true?'none':'block'};
        z-index:998
        .inputbox{
            width:3.06rem;
        height:.4rem;
        background:rgba(137,195,235,1);
        box-shadow:0px .03rem .06rem rgba(0,0,0,0.16);
        opacity:1;
        border-radius:.15rem;
        margin-bottom:.1rem;
        font-size:.18rem;
        line-height:.4rem;
        text-align:left;
        padding:0 .2rem 0 .2rem;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(254,254,254,1);
        opacity:1;
.tagq{
    width:.14rem;
height:.14rem;
background:rgba(0,0,0,0);
opacity:1;
background: url(${tagq}) no-repeat;
background-position:center;
float:right;
margin-top:.13rem;
margin-bottom:.13rem;
display:${props=>props.hide===true?'none':'block'}
}
        }
        .tip{
            width:100%;
height:.2rem;
font-size:.14rem;
font-family:PingFang SC;
font-weight:bold;
line-height:.2rem;
color:rgba(112,112,112,1);
opacity:1;text-align:center;
        }
    }

`
 export {
    IndexContainer
 }