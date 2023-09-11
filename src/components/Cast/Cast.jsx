import { getMovieCast } from "api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { StyledImage, StyledList, StyledText } from "./Cast.styled";

const placeholder = 'https://cdn.vectorstock.com/i/1000x1000/13/68/person-gray-photo-placeholder-man-vector-23511368.webp'

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);


    useEffect(() => {
        if(!movieId){
            return
        }
        
        async function getCast (movieId){
            try {
                const cast = await getMovieCast(movieId);
                setCast(cast);
            } catch (error) {
                console.log(error)
            }
        }

        getCast(movieId)
    }, [movieId])
    
    return(
        cast.length !== 0 
        ? (
            <>
                <StyledList>
                    {cast.map(actor => {
                        return(
                            <li key={actor.id}>
                                <StyledImage src={
                                    actor.profile_path 
                                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                                    : placeholder
                                } alt={actor.name} />
                                <StyledText>{actor.name}</StyledText>
                                <StyledText>Character: {actor.character}</StyledText>
                            </li>
                        )
                    })}
                </StyledList>
            </>
        )
        :( 
            `We don't have any cast information for this movie.`
        )
    )
}