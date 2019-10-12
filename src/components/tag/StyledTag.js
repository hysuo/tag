import styled from 'styled-components'
import bg from 'img/c/微信图片_20190919090717.svg'
const TagContainer = styled.div`
position :absolute;
    top:.09rem;
    right:.21rem;
    height:.8rem;
    width:2.99rem;
    background:pink;
    width:2.96rem;
background:rgba(255,255,255,1);
box-shadow:0 .03rem .06rem rgba(112,112,112,0.16);
opacity:1;
padding:.16rem .1rem .19rem .21rem;
.span-1{
height:.22rem;
font-size:.16rem;
font-family:PingFang SC;
font-weight:bold;
line-height:.22rem;
color:rgba(25,25,25,1);
opacity:1;
}
div.tag{width:.16rem;
height:.16rem;
background:rgba(0,0,0,0);
background:url(${bg}) no-repeat;position:absolute;top:.31rem;left:2.70rem;bottom:.33rem;right:.10rem;}
span.spanq{
margin-top:.09rem;
height:.14rem;
font-size:.1rem;
font-family:PingFang SC;
font-weight:bold;
line-height:.14rem;
color:rgba(112,112,112,1);
opacity:1;
}
       
`

export {
  TagContainer
}