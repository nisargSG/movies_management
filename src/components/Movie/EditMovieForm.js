export default function EditMovieForm(props) {
    return (
    <div className="container p-4">
        <h1>Editing : {props.movieData.title}</h1>
        <button className="btn btn-warning" onClick={()=>props.setCurrentState({mode:"LIST"})}>Cancel</button>
    </div>
    )
}