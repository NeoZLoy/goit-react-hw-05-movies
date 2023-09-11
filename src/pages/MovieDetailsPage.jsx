import { getMovieDetails } from 'api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { StyledImage, StyledLink, StyledWrapper, StyledList } from './MovieDetailsPage.styled';



export const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movieDet, setMovieDet] = useState({})

    const placeholder = 'https://i.pinimg.com/564x/80/32/b4/8032b434ccb5d1a6824869dde681a7f8.jpg';

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
            <StyledLink to={"/"}>Go back</StyledLink>
            <StyledWrapper>
                <StyledImage src={
                  movieDet.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieDet.poster_path}`
                    : placeholder
                } alt={`${movieDet.title} poster`} />
                <div>
                    <h1>{movieDet.title}</h1>
                    <p>User Score: {movieDet.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{movieDet.overview}</p>
                    <h3>Genres</h3>
                    <ul>
                        {movieDet.genres &&
                        movieDet.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
                    </ul>
                </div>
                
                
            </StyledWrapper>
            <div>
                <h2>Additional information</h2>
                <StyledList>
                    <li>
                        <StyledLink to="cast">Cast</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="reviews">Reviews</StyledLink>
                    </li>
                </StyledList>
                <Outlet />
            </div>
        </>
        
    )
}