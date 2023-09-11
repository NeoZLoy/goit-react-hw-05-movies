import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

 const KEY = "8a71f47212968126d9c26634e22e6e93"

 const getPopularMovies = async () => {
    try {
        const res = await axios.get(`3/movie/popular/?api_key=${KEY}`)
        return res.data.results
    } catch (error) {
        console.log(error)
    }
 }

 const getMovieDetails = async (movieId) => {
    try {
        const res = await axios.get(`/3/movie/${movieId}?api_key=${KEY}`);
        return res.data
    } catch (error) {
        console.log(error)
    }
 }

 const getMovieCast = async (movieId) => {
    try {
        const res = await axios.get(`/3/movie/${movieId}/credits?api_key=${KEY}`)
        return res.data.cast;
    } catch (error) {
        console.log(error)
    }
 }

 const getMovieReview = async (movieId) => {
    try {
        const res = await axios.get(`/3/movie/${movieId}/reviews?api_key=${KEY}`)
        console.log(res)
        return res.data.results;
    } catch (error) {
        console.log(error)
    }
 }

 const getMovieByName = async (query) => {
    try {
        const res = await axios.get(`/3/search/movie?api_key=${KEY}?query=${query}`)
        return res
    } catch (error) {
        console.log(error)
    }
 }

 export {getPopularMovies, getMovieDetails, getMovieCast, getMovieReview, getMovieByName}