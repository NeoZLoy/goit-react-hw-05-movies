import { getMovieDetails } from 'api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';



export const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDet, setMovieDet] = useState({})

    const placeholder = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    useEffect(() => {
       async function getDetails(movieId){
        try {
            const details = await getMovieDetails(movieId);
            setMovieDet(details);
        } catch (error) {
            console.log(error)
        }
       }

       getDetails(movieId)
    }, [movieId])
    return (
        <>
            <div>
                <Link to={"/"}>Go back</Link>
            </div>
            <div>
                <img src={
                  movieDet.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieDet.poster_path}`
                    : placeholder
                } alt={`${movieDet.title} poster`} />
                <h1>{movieDet.title}</h1>
                <p>User Score: {movieDet.vote_average}</p>
                <h3>Overview</h3>
                <p>{movieDet.overview}</p>
                <h3>Genres</h3>
                {movieDet.genres &&
                  movieDet.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
            </div>
            <div>
                <h2>Additional information</h2>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
                <Outlet />
            </div>
        </>
        
    )
}