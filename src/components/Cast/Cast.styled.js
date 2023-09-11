import { styled } from "styled-components";

const StyledImage = styled.img`
display: block;
height: 180px;
`

const StyledList = styled.ul`
display: flex;
gap: 12px;
overflow-x: scroll;
list-style: none;
`

const StyledText = styled.p`
text-align: center;
`


export {StyledImage, StyledList, StyledText}