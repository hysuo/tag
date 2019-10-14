import styled from 'styled-components'
const InformContainer = styled.div`
    height:100%;
    display:flex;
    background:#fff;
    flex-direction: column;
    main{
        flex:1;
        padding:.1rem .2rem 0 .2rem; 
        >div:last-child{
            width:1.6rem;
            height:.5rem;
            background:rgba(137,195,235,1);
            box-shadow:0 .03rem .06rem rgba(0,0,0,0.16);
            opacity:1;
            border-radius:.2rem;
            color:rgba(255,255,255,1);
            line-height:.5rem;
            text-align:center;
            margin: .78rem 0 0 .9rem;
        }
    }
`
const CheckShow = styled.div`
    width:3.35rem;
    height:.4rem;
    background:rgba(255,255,255,1);
    box-shadow:0 .03rem .06rem rgba(178,178,178,0.16);
    border-radius:.2rem;
    padding:.1rem .2rem;
    display:flex;
    justify-content:space-between;
    margin-bottom : .1rem;
`
export {
    InformContainer,
    CheckShow
}
