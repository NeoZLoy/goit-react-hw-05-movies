import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { getPopularMovies } from "api";
import { StyledItem, StyledList, StyledWrapper } from "./PopularMoviesList.styled";



export const PopularMoviesList = () => {
    const location = useLocation();
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
      async function getMovies(){
        try {
            const populars = await getPopularMovies();
            setPopularMovies(populars)
        } catch (error) {
            console.log(error)
        }
      }

      getMovies();
    }, [])

    return (
        <StyledWrapper>
            <StyledList>
                {popularMovies.map(movie => {
                    return(
                        <li key={movie.id}>
                             <StyledItem to={`movies/${movie.id}`} state={{from: location}}>{movie.title}</StyledItem>
                        </li>
                    )
                })}
            </StyledList>
        </StyledWrapper>
        
    )
}