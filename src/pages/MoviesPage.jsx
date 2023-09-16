import { getMovieByName } from "api";
import { SearchForm } from "components/SearchForm/SearchForm"
import { SearchResults } from "components/SearchResults/SearchResults";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

export const MoviesPage = () => {
    // const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? "";

    useEffect(() => {
        
        if(query === ''){
            return
        }

        async function getMovies(query){
            try {
                const movies = await getMovieByName(query);
                setResult(movies);
            } catch (error) {
                console.log(error)
            }
        }

        getMovies(query)
    }, [query])

    const onSubmit = (searchQuery) => {
       setSearchParams({query: searchQuery})
    }
        
    return(
        <>
            <div>
                <SearchForm onSubmit = {onSubmit}/>
            </div>
            <div>
                <SearchResults results = {result}/>
            </div>
        </>
    )
}