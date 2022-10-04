import styled from "styled-components";

export const MarkdownEditorContainer = styled.div `

display: flex;
flex-direction: column;


`
export const MarkdownInput = styled.textarea`
display: flex;
flex: 1;
height: 30vh;
border: none;
resize: none;
outline: none;
overflow: hidden;
order: -1;

`

export const MarkDownOutput = styled.div`
display: flex;
flex: 1;
height: 100vh;
`