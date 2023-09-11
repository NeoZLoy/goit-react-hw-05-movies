import { Link } from "react-router-dom"
import { StyledList, StyledItem } from "./SearchResults.styled"

export const SearchResults = ({results}) => {
    return(
        <div>
        
            <StyledList>
                {results.map(result => {
                return (
                    <li key={result.id}>
                        <StyledItem to={`${result.id}`}>{result.title}</StyledItem>
                    </li>
                )
                })}
            </StyledList>
        </div>
        
    )
}