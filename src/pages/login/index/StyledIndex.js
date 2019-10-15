import Styled from 'styled-components'
import bgimg from  'images/0122c75d2e93f8a80120695c1a771f.jpg@1280w_1l_2o_100sh.svg'
import tagimg from 'images/tag/TAGTAG-3.svg'
const IndexContainer = Styled.div `
width:100%;
height:100%;
overflow-y:scroll;
background:rgba(0,0,0,0);
background:url(${bgimg}) no-repeat;
background-position:center;
opacity:1;
position:relative
`
const Tag = Styled.div `
width:2.55rem;
height:2.38rem;
margin-top: 0 ;
margin:auto;
background:url(${tagimg}) no-repeat;
background-position:center;
.am-tabs-tab-bar-wrap !import{
    border-radius:.5rem
}
`
const Page
 =Styled.div `
width:3.16rem;
height:4.13rem;
background:rgba(255,255,255,1);
box-shadow:0px .03rem .06rem rgba(0,0,0,0.16);
opacity:1;
border-radius:.5rem;
margin-bottom :.6rem;
position:absolute;
top:1.94rem;
right:.29rem;
bottom:.6rem;
padding-top:.38rem;
left:.3rem;
z-index:99
ul{
    width:1.06rem;
    height:.22rem;
    // bottom : .3rem;
    margin:auto;
    display:flex;
    flex-direction:row;
    li{
        flex:1
        width:.32rem;
height:.22rem;
font-size:.16rem;
font-family:PingFang SC;
font-weight:600;
line-height:.22rem;

opacity:1;
    }
& :nth-child(2){

    text-align:right;
    border-left:1px solid rgba(229,229,229,1);
    }
    .active{    
        color:rgba(160,216,239,1);
    }
}
nav{
    width:100%;
    height:.22rem;
    padding: 0 .43rem 0 .43rem;
    display:flex;
    flex-direction: row;
    justify-content:space-between
    div{

    }
}
`
const Register = Styled.div `
width:3.16rem;
height:4.71rem;
background:rgba(255,255,255,1);
box-shadow:0 .03rem .06rem rgba(0,0,0,0.16);
opacity:1;
border-radius:.5rem;
margin-bottom :.6rem;
position:absolute;
top:1.36rem;
right:.29rem;
bottom:.6rem;
padding-top:.38rem;
left:.3rem;
z-index:99
ul{
    width:1.06rem;
    height:.22rem;
    // bottom : .3rem;
    margin:auto;
    display:flex;
    flex-direction:row;
    text-align: center;
    span{
        flex:1;
        text-align: center;
        display: block;
        width:.64rem;
        height:.22rem;
        font-size:.16rem;
        font-family:PingFang SC;
        font-weight:600;
        line-height:.22rem;
        color:rgba(25,25,25,1);
        opacity:1;
    }
    li{
        flex:1
        width:.32rem;
height:.22rem;
font-size:.16rem;
font-family:PingFang SC;
font-weight:600;
line-height:.22rem;

opacity:1;
    }
& :nth-child(2){

    text-align:right;
    border-left:.01rem solid rgba(229,229,229,1);
    }
    .active{    
        color:rgba(160,216,239,1);
    }
}
nav{
    width:100%;
    height:.22rem;
    padding: 0 .43rem 0 .43rem;
    display:flex;
    flex-direction: row;
    justify-content:space-between
    div{

    }
}
`
const Button = Styled.div `
width:1.6rem;
height:.4rem;
background:rgba(137,195,235,1);
box-shadow:0 .03rem .06rem rgba(112,112,112,0.16);
opacity:1;
padding:.08rem .61rem .07rem .61rem;
border-radius:.2rem;
position:absolute;
top:3.13rem;
left:.82rem;
right:.74rem;
bottom:.6rem
    b{
        display:block;
        width:.45rem;
        height:.25rem;
        font-size:.18rem;
        font-family:PingFang SC;
        font-weight:600;
        line-height:.25rem;
        color:rgba(255,255,255,1);
        letter-spacing:.04rem;
        opacity:1;
}
`
const RegisterButton =Styled.div `
width:1.6rem;
height:.4rem;
background:rgba(137,195,235,1);
box-shadow:0 .03rem .06rem rgba(112,112,112,0.16);
opacity:1;
padding:.08rem .61rem .07rem .61rem;
border-radius:.2rem;
position:absolute;
top:3.71rem;
left:.82rem;
right:.74rem;
bottom:.6rem
    b{
        display:block;
        width:.45rem;
        height:.25rem;
        font-size:.18rem;
        font-family:PingFang SC;
        font-weight:600;
        line-height:.25rem;
        color:rgba(255,255,255,1);
        letter-spacing:.04rem;
        opacity:1;
}
`
export {
    IndexContainer,Tag,Button,RegisterButton
    ,Page,
    Register
}

