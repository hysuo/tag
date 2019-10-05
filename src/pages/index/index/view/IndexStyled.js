import styled from 'styled-components'

const IndexContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    main{
        flex:1;
        overflow-y:auto;
    }
    footer{
        height:.5rem;
        background:#FFFFFF;
        display:flex;
        box-shadow: #707070 10px 10px 10px 5px ;
        div{
            width:20%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            color:#707070;
            p{
                font-size:.12rem;
                overflow:hidden;
                transform:scale(0.8)
            }
            &.active{
                img{
                    background:#89C3EB;
                    border-radius:25%
                }
                color:#89C3EB;
                }
        }
    }
        
`
export{
    IndexContainer
}