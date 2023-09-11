import styled  from "styled-components"
import { Link } from "react-router-dom";

const StyledList = styled.ul`
display: flex;
flex-direction: column;
gap: 12px;
`

const StyledItem = styled(Link)`
padding: 8px;
text-decoration: none;
color: black;
font-size: 18px;
cursor: pointer;

&:hover{
    background-color: tomato;
}
`

const StyledWrapper = styled.div`
padding: 12px;
`

export {StyledList, StyledItem, StyledWrapper}
