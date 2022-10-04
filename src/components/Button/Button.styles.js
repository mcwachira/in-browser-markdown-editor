import styled from "styled-components";
export const BaseButton  = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 1rem;
background-color: black;
color: #fff;
text-transform: uppercase;
cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;

&:hover    {

        background-color: white;
    color: black;
    border: 1px solid black;
}
`

export const GoogleButton = styled(BaseButton)`
 background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`