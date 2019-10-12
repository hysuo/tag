import styled from 'styled-components'
const NoneBorderContainer = styled.div`
    width:2.76rem;
    height:.4rem;
    background:rgba(244,250,255,1);
    opacity:1;
    border-radius:.2rem;
    padding:${props=>props.padding};
    margin: ${props=>props.margin};
    line-height: .4rem;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
      i{
        /* padding-left:.29rem; */
        display:inline-block;
        width :.24rem;    
        height:.25rem;
        margin: .08rem 0 .08rem 0;
        display:flex;
        /* background:url(${props => props.iconbeforebg}) no-repeat center center; */
        img{
          /* position:relative;
          top:-0.05rem; */
          flex:1
        }
      }
      input {
        display:block;
        height:.4rem;
        flex:1;
        border: 0;
        background: transparent;
        line-height:.4rem;
        padding-left:.2rem;
          ::placeholder{
          /* width:.7rem; */
          height:.14rem;
          font-size:.1rem;
          font-family:PingFang SC;
          font-weight:400;
          line-height:.14rem;
          color:rgba(112,112,112,1);
          opacity:1;
          
        }
      }
      div{
        width:.6rem;
        height:.29rem;
        background:rgba(137,195,235,1);
        box-shadow:0 .03rem .06rem rgba(112,112,112,0.16);
        opacity:1;
        border-radius:.12rem;
        z-index:999;
        margin:.12rem .12rem .1rem -.9rem;
        display:flex;
        flex-direction: row;
        align-items:center;
        justify-content:center;
        >span{
          display:block;
          width:.75rem;
          height:.16rem;
          font-size:.10rem;
          transform:scale(0.667);
          font-family:PingFang SC;
          font-weight:400;
          line-height:.16rem;
          color:rgba(255,255,255,1);
          opacity:1;
          z-index:999;
          text-align:center;
        }
      }
      b{
        width:.18rem;
        height: .18rem;
        margin-top:.11rem;
        margin-bottom:.11rem;
        /* background: url(${props => props.iconlastbg}) no-repeat; */
        /* background-position:center */
        display:flex;
        visibility:${props => props.iconlastbg?'visibility':'hidden'};
        img{
          flex:1;
          width:.18rem;
          height:.18rem;

        }
      }
`

export {
  NoneBorderContainer
}