import './AddMovieForm.css'
import {callAPI} from '../../../util'
import { useState } from 'react'


export default function AddMovieForm(props) {

    const [title,setTitle]= useState("")
    const [views,setViews]= useState("")
    const [image,setImage]= useState("")

    const [taskStatus,setTaskStatus] = useState()


    const addDetailsToServer=()=>{

        const newMovieData={
            title:title,
            views:views,
            image:image
        }
        callAPI({method:"POST",requestBody:newMovieData,callBackFunction:function(data){
            if(data){
                setTaskStatus(true)
                setTitle("")
                setViews("")
                setImage("")
            }
            else{
                setTaskStatus(false)
            }

        }})
    }


    return (

        <div className="container m-4 p-4 container_add">
            <h1>Add new Movie</h1>

            <div class="mb-3">
                <label for="etxMovieTitle" className="form-label">Movie Title</label>
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="etxMovieTitle" placeholder="Enter Movie Title" />
            </div>
            <div class="mb-3">
                <label for="etxMovieViews" className="form-label">Movie Views</label>
                <input type="text" value={views} onChange={(e) => { setViews(e.target.value) }} className="form-control" id="etxMovieViews" placeholder="Enter Movie Views" />
            </div>
            <div class="mb-3">
                <label for="etxMovieImage" className="form-label">Movie Image</label>
                <input type="text" value={image} onChange={(e) => { setImage(e.target.value) }} className="form-control" id="etxMovieImage" placeholder="Enter Movie Image URL" />
            </div>

            <button className="btn btn-danger m-2" onClick={addDetailsToServer}>Add</button>
            <button className="btn btn-warning m-2" onClick={() => props.setCurrentState({ mode: "LIST" })}>Back</button>

            {taskStatus == false && <div className="alert alert-warning" role="alert">
                Failed To Add
            </div>}

            {taskStatus == true && <div className="alert alert-success" role="alert">
                Added !
            </div>}
        </div>

    )
}