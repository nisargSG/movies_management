import './Movie.css'

export default function Movie(props) {

    return (
        <div className="card card_movie">
            <img src={props.movieData.image} className="card-img-top movie_img" alt="Movie Link"></img>
            <div className="card-body">
                <h5 className="card-title">{props.movieData.title}</h5>
                <p className="card-text">{props.movieData.views}</p>
                <button onClick={()=>props.setCurrentState({mode:"EDIT",movieData:props.movieData})} className="btn btn-primary">Edit</button>
                <button className="btn btn-danger margin_left">Delete</button>
            </div>
        </div>
    )
}