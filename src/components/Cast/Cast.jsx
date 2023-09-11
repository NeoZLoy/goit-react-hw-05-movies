import { getMovieCast } from "api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const placeholderMan = 'https://cdn.vectorstock.com/i/1000x1000/13/68/person-gray-photo-placeholder-man-vector-23511368.webp'
const placeholderWoman = 'https://cdn.vectorstock.com/i/1000x1000/13/70/person-gray-photo-placeholder-woman-vector-23511370.webp'

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
                <ul>
                    {cast.map(actor => {
                        let placeholder
                        if (actor.gender === 1) {
                            placeholder = placeholderWoman;
                        }else{
                            placeholder = placeholderMan
                        }
                        return(
                            <li key={actor.id}>
                                <img src={
                                    actor.profile_path 
                                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                                    : placeholder
                                } alt={actor.name} />
                                <p>{actor.name}</p>
                                <p>Character: {actor.character}</p>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
        :( 
            `We don't have any cast for this movie.`
        )
    )
}