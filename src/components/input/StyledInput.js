import styled from 'styled-components'
// import border from 'components/styled/border.js'
// 
// 30px 16px 0 24px
// 
const NoneBorderContainer = styled.div`
    width:276px;
    height:40px;
    background:rgba(244,250,255,1);
    opacity:1;
    border-radius:20px;
    padding:${props=>props.padding};
    margin: ${props=>props.margin};
    line-height: 40px;
    display:flex;
    flex-direction:row;
    align-content:center;
    justify-content:center;
      i{
        width :25px;    
        height:24px;
        margin: 8px 0 8px 0;
        background:url(${props => props.iconbeforebg}); 
      }
      input {
        display:block;
        height:40px;
        flex:1;
        border: 0;
        background: transparent;
        line-height:40px;
        padding-left:24px;
          ::placeholder{
          width:70px;
          height:14px;
          font-size:10px;
          font-family:PingFang SC;
          font-weight:400;
          line-height:14px;
          color:rgba(112,112,112,1);
          opacity:1;
          
        }
      }
      div{
        width:60px;
        height:20px;
        background:rgba(137,195,235,1);
        box-shadow:0px 3px 6px rgba(112,112,112,0.16);
        opacity:1;
        border-radius:12px;
        z-index:999;
        margin:12px 0px 10px -16px;
        display:flex;
        flex-direction: row;
        align-items:center;
        justify-content:center;
        >span{
          display:block;
          box-sizing:border-box;
          width:60px;
          height:16.5px;
          font-size:12px;
          transform:scale(0.667);
          font-family:PingFang SC;
          font-weight:400;
          line-height:16.5px;
          color:rgba(255,255,255,1);
          opacity:1;
          z-index:999;
          /* text-align:center; */
        }
      }
      b{
        width:18px;
        height: 18px;
        margin-top:11px;
        margin-bottom:11px;
        background: url(${props => props.iconlastbg})
      }
`

export {
  NoneBorderContainer
}