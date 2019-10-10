import styled  from 'styled-components'
const Inputcode = styled.div `
  width: 3.36rem;
  height: .4rem;
  border-radius: .24rem;
  background: #fff;
  margin-top: .1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div:first-child {
    width: 2.56rem;
    height: .26rem;
    background: #E5E5E5;
    margin-left: .1rem;
    border-radius: .12rem;
    input {
      width: 2.36rem;
      height: 100%;
      margin-left: .08rem;
      border: none;
      background: #E5E5E5;
    }
  }
  div:last-child {
    width: .55rem;
    height: .2rem;
    background: #89C3EB;
    color: #fff;
    border-radius: .24rem;
    margin-right: .1rem;
    display: flex;
    /* justify-content: center; */
    span{
      display: inline-block;
      /* width: 1.1rem; */
      white-space:nowrap;
      font-size: .16rem;
      /* overflow:hidden; */
   
      transform: scale(.5);
      position:relative;
      left:-25%;
      top: -5%;
    }
  }
`

export {
	Inputcode
}