import './EditMovieForm.css'

export default function EditMovieForm(props) {
    return (
        <div className="container m-4 p-4 container_edit">
            <h1>Editing : {props.movieData.title}</h1>

            <div class="mb-3">
                <label for="etxMovieTitle" className="form-label">Movie Title</label>
                <input type="text" value={props.movieData.title} className="form-control" id="etxMovieTitle" placeholder="Enter Movie Title"/>
            </div>
            <div class="mb-3">
                <label for="etxMovieViews" className="form-label">Movie Views</label>
                <input type="text" value={props.movieData.views} className="form-control" id="etxMovieViews" placeholder="Enter Movie Views"/>
            </div>
            <div class="mb-3">
                <label for="etxMovieImage" className="form-label">Movie Image</label>
                <input type="text" value={props.movieData.image} className="form-control" id="etxMovieImage" placeholder="Enter Movie Image URL"/>
            </div>


            <button className="btn btn-danger m-2" >Edit</button>
            <button className="btn btn-warning m-2" onClick={() => props.setCurrentState({ mode: "LIST" })}>Cancel</button>
        </div>
    )
}