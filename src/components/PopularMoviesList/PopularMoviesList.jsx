import { useEffect, useState } from "react";
import { getPopularMovies } from "api";
import { Link } from "react-router-dom";

export const PopularMoviesList = () => {

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
        <ul>
                {popularMovies.map(movie => {
                    return(
                        <li key={movie.id}>
                             <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                        </li>
                    )
                })}
            </ul>
    )
}