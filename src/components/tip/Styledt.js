import styled from 'styled-components'
// import border from 'components/styled/border.js'
const TipContainer = styled.div `
    width:49px;
    height:14px;
    font-size:12px;
    margin-top:8px;
    transform:scale(.83333);
    font-family:PingFang SC;
    font-weight:bold;
    line-height:14px;
    color:rgba(112,112,112,1);
    opacity:1;
    border:0;
    float:left;
`
const CheckContainer= styled.div `
  float:left;
  height:12px;
  margin-top:9px;
  background:url(${props=>props.check}) no-repeat;
  width:12px;
`
export {
  TipContainer,
  CheckContainer
}