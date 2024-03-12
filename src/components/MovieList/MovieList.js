import { useState } from 'react'
import Movie from '../Movie/Movie'
import './MovieList.css'
import { callAPI } from '../../util'

export default function MovieList() {

    //view state
    const [movies, setMovies] = useState([])

    const [currentMode, setCurrentMode] = useState("LIST")

    const [editMovieData, setEditMovieData] = useState({})


    const loadData = (moviesData) => {
        if (moviesData) {
            setMovies(moviesData)
        }
    }

    const refreshMoviesList = () => {
        callAPI("GET", {}, loadData)
    }

    const loadEditForm = (movieData) => {
        setCurrentMode("EDIT")
        setEditMovieData(movieData)


    }

    if (movies.length == 0)
        refreshMoviesList()

    return (

        <>

            {currentMode == "LIST" && <div className='container_movie_list'>

                {movies.length == 0 && <div className="alert alert-warning" role="alert">
                    No Movies Data Found
                </div>}

                {movies.length > 0 && movies.map((movieData) => {
                    return <Movie loadEditForm={loadEditForm} refreshMoviesList={refreshMoviesList} key={movieData.id} movieData={movieData} />
                })}

            </div>}


            {currentMode == "EDIT" && <div>

                <input type='text' value={editMovieData.title} placeholder='enter movie title' />
                <input type='text' value={editMovieData.views} placeholder='enter movie views' />
                <button onClick={()=>{setCurrentMode("LIST")}} >edit</button>

            </div>}

            {currentMode == "ADD" && <h1>Add Form</h1>}



        </>



    )

}