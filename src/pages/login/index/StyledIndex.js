import Styled from 'styled-components'
import bgimg from  'images/0122c75d2e93f8a80120695c1a771f.jpg@1280w_1l_2o_100sh.svg'
import tagimg from 'images/tag/TAGTAG-3.svg'
const IndexContainer = Styled.div `
width:100%;
height:675px;
background:rgba(0,0,0,0);
background:url(${bgimg}) no-repeat;
opacity:1;
position:relative
`
const Tag = Styled.div `
width:255px;
height:238px;
margin-top: 0 ;
margin:auto;
background:url(${tagimg}) no-repeat;
.am-tabs-tab-bar-wrap !import{
    border-radius:50px
}
`
const Page
 =Styled.div `
width:316px;
height:413px;
background:rgba(255,255,255,1);
box-shadow:0px 3px 6px rgba(0,0,0,0.16);
opacity:1;
border-radius:50px;
margin-bottom :60px;
position:absolute;
top:194px;
right:29px;
bottom:60px;
padding-top:38px
left:30px;z-index:99
ul{
    width:106px;
    height:22px;
    // bottom : 30px;
    margin:auto;
    display:flex;
    flex-direction:row;
    li{
        flex:1
        width:32px;
height:22px;
font-size:16px;
font-family:PingFang SC;
font-weight:600;
line-height:22px;

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
    height:22px;
    padding: 0 43px 0 43px;
    display:flex;
    flex-direction: row;
    justify-content:space-between
    div{

    }
}
`
const Register = Styled.div `
width:316px;
height:471px;
background:rgba(255,255,255,1);
box-shadow:0px 3px 6px rgba(0,0,0,0.16);
opacity:1;
border-radius:50px;
margin-bottom :60px;
position:absolute;
top:136px;
right:29px;
bottom:60px;
padding-top:38px
left:30px;z-index:99
ul{
    width:106px;
    height:22px;
    // bottom : 30px;
    margin:auto;
    display:flex;
    flex-direction:row;
    text-align: center;
    span{
        flex:1;
        text-align: center;
        display: block;
        width:64px;
        height:22px;
        font-size:16px;
        font-family:PingFang SC;
        font-weight:600;
        line-height:22px;
        color:rgba(25,25,25,1);
        opacity:1;
    }
    li{
        flex:1
        width:32px;
height:22px;
font-size:16px;
font-family:PingFang SC;
font-weight:600;
line-height:22px;

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
    height:22px;
    padding: 0 43px 0 43px;
    display:flex;
    flex-direction: row;
    justify-content:space-between
    div{

    }
}
`
const Button = Styled.div `
width:160px;
height:40px;
background:rgba(137,195,235,1);
box-shadow:0px 3px 6px rgba(112,112,112,0.16);
opacity:1;
padding:8px 61px 7px 61px;
border-radius:20px;
position:absolute;
top:313px;
left:82px;
right:74px;
bottom:60px
    b{
        display:block;
        width:45px;
        height:25px;
        font-size:18px;
        font-family:PingFang SC;
        font-weight:600;
        line-height:25px;
        color:rgba(255,255,255,1);
        letter-spacing:4px;
        opacity:1;
}
`
const RegisterButton =Styled.div `
width:160px;
height:40px;
background:rgba(137,195,235,1);
box-shadow:0px 3px 6px rgba(112,112,112,0.16);
opacity:1;
padding:8px 61px 7px 61px;
border-radius:20px;
position:absolute;
top:371px;
left:82px;
right:74px;
bottom:60px
    b{
        display:block;
        width:45px;
        height:25px;
        font-size:18px;
        font-family:PingFang SC;
        font-weight:600;
        line-height:25px;
        color:rgba(255,255,255,1);
        letter-spacing:4px;
        opacity:1;
}
`
export {
    IndexContainer,Tag,Button,RegisterButton
    ,Page,
    Register
}

