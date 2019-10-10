import styled from 'styled-components'
import bg from 'img/c/微信图片_20190919090717.svg'
const TagContainer = styled.div`
position :absolute;
    top:9px;
    right:21px;
    height:.8rem;
    width:299px;
    background:pink;
    width:296px;
background:rgba(255,255,255,1);
box-shadow:0px 3px 6px rgba(112,112,112,0.16);
opacity:1;
padding:.16rem 10px 19px 21px;
.span-1{
height:22px;
font-size:16px;
font-family:PingFang SC;
font-weight:bold;
line-height:22px;
color:rgba(25,25,25,1);
opacity:1;
}
div.tag{width:16px;
height:16px;
background:rgba(0,0,0,0);
background:url(${bg}) no-repeat;position:absolute;top:31px;left:270px;bottom:33px;right:10px;}
span.spanq{
margin-top:9px;
height:14px;
font-size:10px;
font-family:PingFang SC;
font-weight:bold;
line-height:14px;
color:rgba(112,112,112,1);
opacity:1;
}
       
`

export {
  TagContainer
}