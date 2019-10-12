import styled from 'styled-components'

const IndexContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    main{
        flex:1;
        overflow-y:auto;
        .activeM{
            position: absolute;
            top:0;
            left:0;
            z-index:2;
            width:100%;
            height:100%;
            background:rgba(93,92,92,1);
            opacity:0.55;
        }
        .publishD{
            position: absolute;
            left:.99rem;
            top:5.37rem;
            z-index: 999;
            opacity:1;
            display:none;
            p{
                font-size:.2rem;
                color:#fff;
                position: absolute;
                top: .56rem;
                left: .1rem;
                font-weight: bold;
                transform: scale(.5);
                width: 1rem;
                margin-left: -.2rem;
            }
        }
        .publishT{
            position: absolute;
            left:2.09rem;
            top:5.37rem;
            z-index: 999;
            opacity:1;
            display:none;
            p{
                font-size:.2rem;
                color:#fff;
                position: absolute;
                top: .56rem;
                left: .1rem;
                font-weight: bold;
                transform: scale(.5);
                width: 1rem;
                margin-left: -.2rem;
            }
        }
        .activeTD{
            display:block;
        }
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
            &.activeP{
                z-index:999;
            }
        }
    }
        
`
export{
    IndexContainer
}