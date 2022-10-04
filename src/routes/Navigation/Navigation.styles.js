import styled from "styled-components";
import {FaBars} from 'react-icons/fa';
import { Link } from "react-router-dom";


export const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
top: 0;
height: 75px;
background-color: #111;
width: 100%;
position: fixed;
color: #fff;
font-size: 1rem;

`


export const NavBarContainerLeft = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
position: relative;

`

export const OpenButton = styled.button`
margin: 0;
background-color: #333;
border-radius: 0;
outline: none;
padding: 1rem 1rem;
margin-right: 1rem;
`

export const NavBarContainerRight = styled.div`
display:flex;
justify-content: space-between;
align-items: center;


`

export const InputBox = styled.input`
outline: none;
background: none;
border-bottom: 1px solid #fff;
font-size: 1rem;
padding: .5rem 2rem;
margin-left: 2rem;
&:focus{
    outline: none;
    border: 1px solid #fff;
}
`

export const DeleteButton = styled.button`
outline: none;
background: none;
border: none;
`

export const SaveButton = styled.div`
background-color:#e46643 ;
display:flex ;
align-items:center ;
justify-content:space-between ;
padding:0 2rem;
cursor:pointer ;
margin-right:1rem ;
`

export const NavLink = styled(Link)`
list-style:none ;
text-decoration:none ;
color:inherit;
&:hover{
    text-decoration:none ;
    color:inherit;
}

&:focus{
     text-decoration:none ;
     color:inherit;
}

`