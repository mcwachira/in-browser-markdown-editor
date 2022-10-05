import styled,{keyframes} from "styled-components";


export const SpinnerContainer = styled.div`

position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background-color: rgba(0,0,0,.5);
z-index: 500;
display: flex;
align-items: center;
justify-content: center;

`
const spinAnimation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

  `

 export const Circle = styled.span`
width:64px;
height:64px;
border:8px solid ;
  border-color: #00cc66 transparent #00cc66 transparent;
  border-radius: 50%;
  animation-name: ${spinAnimation};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;

`


