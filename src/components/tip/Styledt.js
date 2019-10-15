import styled from 'styled-components'
// import border from 'components/styled/border.js'
const TipContainer = styled.div `
    width:.49rem;
    height:.14rem;
    font-size:.12rem;
    margin-top:.08rem;
    transform:scale(.83333);
    font-family:PingFang SC;
    font-weight:bold;
    line-height:.14rem;
    color:rgba(112,112,112,1);
    opacity:1;
    border:0;
    float:left;
`
const CheckContainer= styled.div `
  float:left;
  height:.12rem;
  margin-top:.05rem;
  /* background:url(${props=>props.check}) no-repeat; */
  /* background-position:center; */
  width:.12rem;
  input[type=checkbox] ::after{
    background-color:blue;
    display: inline-block;
    color:blue
  }
`
export {
  TipContainer,
  CheckContainer
}