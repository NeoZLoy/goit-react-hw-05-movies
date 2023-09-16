import { useLocation } from "react-router-dom"
import { StyledList, StyledItem } from "./SearchResults.styled"

export const SearchResults = ({results}) => {

const location = useLocation();

    return(
        <div>
            <StyledList>
                {results.map(result => {
                return (
                    <li key={result.id}>
                        <StyledItem to={`${result.id}`} state={{from: location}}>{result.title}</StyledItem>
                    </li>
                )
                })}
            </StyledList>
        </div>
        
    )
}