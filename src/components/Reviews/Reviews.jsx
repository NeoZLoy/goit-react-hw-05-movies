import { getMovieReview } from "api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
            <ul>
                {reviews.map(review => {
                    return(
                        <li key={review.id}>
                            <h3>Author: {review.author}</h3>
                            <p>{review.content}</p>
                        </li>
                    )
                    
                })}
            </ul>
        </div>
        
    )
    : (
        `We don't have any reviews for this movie.`
    )    
}