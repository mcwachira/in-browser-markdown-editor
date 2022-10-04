import styled from "styled-components";

export const SideNavContainer = styled.div`
left: 0;
top: 0;
width: 20rem;
/* min-height: 100vh; */
background: #333;
color: #fff;
transition: all 0.5s;
position: absolute;
z-index: 100;


`
export const SideNavHeader  = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
align-items: center;
padding: 0 1rem;


`

export const CloseButton = styled.button`
margin:0;
/* background-color:#fff ; */
border-radius:0 ;
outline:none ;
padding:1rem 1rem;

`

export const SideNavBody = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`

export const AddDocument = styled.button`
background-color: #e46634;
border-radius: 5px;
margin: 50rem auto;
padding: 1rem 2rem;
cursor: pointer;
align-self: flex-end;

`