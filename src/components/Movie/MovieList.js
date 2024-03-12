import { useState } from 'react'
import Movie from './Movie'
import './MovieList.css'
import { callAPI } from '../../util'

export default function MovieList(props) {

    //movies state variable
    const [allMovies, setAllMovies] = useState([])

    //Gets Called When Data is Fetched From API
    const whenMoviesLoaded=(jsonMoviesData)=>{
        if (jsonMoviesData) setAllMovies(jsonMoviesData);
    };

    //Get The Data
    if(allMovies.length===0)
        callAPI({method:"GET",callBackFunction:whenMoviesLoaded})

    //render movies
    return (
        <div className='container_movie_list'>
            {allMovies.length === 0 && <div className="alert alert-warning" role="alert">
                No Movies Data Found
            </div>}
            {allMovies.length > 0 && allMovies.map((movieData) => {
                return <Movie key={movieData.id} setCurrentState={props.setCurrentState} movieData={movieData} />
            })}
        </div>
    )

}