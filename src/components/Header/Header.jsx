import { StyledHeader, StyledLink } from "./Header.styled"

export const Header = () => {
    return(
        <StyledHeader>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
        </StyledHeader>
    )
}