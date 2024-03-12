import './Movie.css'
import {callAPI} from '../../util'

export default function Movie(props) {


    const deleteItem=()=>{
        callAPI("DELETE",{},function(){
            props.refreshMoviesList()
        },props.movieData.id)
    }

    const editItem=()=>{
        props.loadEditForm(props.movieData)
    }

    return (

        <div className="card card_movie">
            <img src={props.movieData.image} className="card-img-top movie_img" alt="Movie Image"></img>

            <div className="card-body">
                <h5 className="card-title">{props.movieData.title}</h5>
                <p className="card-text">{props.movieData.views}</p>
                <button onClick={editItem} className="btn btn-primary">Edit</button>
                <button onClick={deleteItem} className="btn btn-danger margin_left">Delete</button>
            </div>

        </div>

    )

}