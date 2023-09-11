import { styled } from "styled-components"

const StyledList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 8px;
list-style: none;
`

const StyledText = styled.p`
width: 300px;
height: 300px;
padding: 8px;
border: 1px solid black;
overflow-y: scroll;
`


export {StyledList, StyledText}