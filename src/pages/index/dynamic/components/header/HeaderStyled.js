import styled from 'styled-components'
const HeaderContainer = styled.div`
    header{
        height:.64rem;
        display:flex;
        align-items:center;
        background:#fff;
        box-shadow:0 .03rem .06rem rgba(178,178,178,0.16);
        font-weight:400;
        >div:first-child{
            margin: 0 ${props =>  props.marginLeft} 0 .2rem;
        }
        >div:last-child{
            color:rgba(25,25,25,1);
            font-size:.18rem;
        }
    }
`
export{
    HeaderContainer
}