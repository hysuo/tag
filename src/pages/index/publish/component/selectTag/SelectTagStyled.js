import styled from 'styled-components'
const SelectTagShow = styled.div`
    ul{
        width: 1rem;
        height: 1rem;
        background: rgba(255,255,255,1);
        margin-left: 1.06rem;
        box-shadow: 0 0.03rem 0.06rem rgba(112,112,112,0.16);
        border-radius: .2rem;
        font-size: .13rem;
        padding: .1rem .2rem;
        position: absolute;
        top: 3.33rem;
        color: #666;
        display:none;
        &.active{
            display:block;
        }
        li{
            &.active{
                font-weight: bold;
                color: rgba(137,195,235,1);
            }
        }
    }
`
export default SelectTagShow