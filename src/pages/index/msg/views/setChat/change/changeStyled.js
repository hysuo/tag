import styled from 'styled-components'

const ChangeNameContainer = styled.div`
    header{
    display:flex;
    align-items:center;
    height:.44rem;
    background:#fff;
    >div{
      width:10%;
      text-align:center;
      img{
        width:.16rem;
        height:.16rem;
      }
    } 
    p:nth-child(2){
      flex:1;
      font-size:.2rem;
      color:#191919;
      text-align:center;
    }
    p:nth-child(3){
        width:15%;
        color:#61ABFF;
        font-size:.16rem;
        text-align:center;
    }
  }
`
const SearchContainer = styled.div`
    height:.5rem;
    padding:.05rem .2rem;
    >div{
        height:.38rem;
        background:#fff;
        padding:.06rem .1rem;
        border-radius:.2rem;
        display:flex;
        align-items:center;
        input{
            border:0;
            height:.26rem;
            background:#e5e5e5;
            width:2.86rem;
            border-radius:.2rem;
            padding:.02rem .1rem;
            margin-right:.1rem;
        }
        img{
            width:.2rem;
            height:.2rem;
        }
    }
`
export{
    ChangeNameContainer,
    SearchContainer
}