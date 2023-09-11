import { Link } from "react-router-dom";
import styled  from "styled-components";

const StyledWrapper = styled.div`
display: flex;
gap: 20px;
padding: 12px;
`

const StyledImage = styled.img`
display: block;
width: 360px;
`

const StyledList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
`
const StyledLink = styled(Link)`
display: block;
text-align: center;
width: 80px;
margin: 12px;
padding: 8px;
text-decoration: none;
color: black;
background-color: #FF795C;
border-radius: 4px;
:hover{
    background-color: tomato; 
}
`

export {StyledImage, StyledWrapper, StyledList, StyledLink}