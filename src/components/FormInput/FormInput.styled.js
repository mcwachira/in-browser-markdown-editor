import styled, {css} from "styled-components";

const subColor = 'grey'
const mainColor =' black'

//this enable us to store a block of css code 
const shrinkLabelStyles = css`
top:-20px;
font-size:12px;
color:${mainColor}
`
export const FormInputLabel = styled.label`
color: ${subColor};
font-size: 1rem;
font-weight: normal;
position: absolute;
pointer-events: none;
left: 5px;
top: 10px;
transition: all .2s;
${({ shrink }) => shrink && shrinkLabelStyles}

`

export const Input = styled.input`
background: none;
background-color:white;
color:${subColor};
font-size: 1.2rem;
padding:10px 10px 10px 5px ;
display:block ;
width:100% ;
border:none;
border-bottom:1px solid ${subColor} ;
margin:25px 0;
&:focus{
    outline:none;

}

//this enables the formInput label get the shrink label styles when its in focus as its a sibling of the input element
&:focus ~ ${FormInputLabel}{
    ${shrinkLabelStyles}
}

`

export const Group = styled.div`

position: relative;
margin: 45px 0;
input[type='password']{
    letter-spacing:.3rem ;
}

`