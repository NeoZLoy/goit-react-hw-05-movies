import { getMovieReview } from "api";
import { StyledList } from "./Reviews.styled";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { StyledText } from "./Reviews.styled";

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        if(!movieId){
            return
        }

        async function getReviews (movieId){
           try {
            const reviews = await getMovieReview(movieId);
            setReviews(reviews);
           } catch (error) {
            console.log(error)
           }
        }
        getReviews(movieId)
    }, [movieId])

    return reviews.length !== 0 
    ? (
        <div>
            <StyledList>
                {reviews.map(review => {
                    return(
                        <li key={review.id}>
                            <h3>Author: {review.author}</h3>
                            <StyledText>{review.content}</StyledText>
                        </li>
                    )
                    
                })}
            </StyledList>
        </div>
        
    )
    : (
        `We don't have any reviews for this movie.`
    )    
}