import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

const StyledHeader = styled.ul`
display: flex;
list-style: none;
gap: 24px;
`

const StyledLink = styled(NavLink)`
text-decoration: none;
color: black;
font-size: 24px;
font-weight: 700;
padding: 8px;

&.active{
    background-color: tomato;
}

:hover{
    background-color: tomato;
}
`

export {StyledHeader, StyledLink}