import { useState } from 'react'
import './EditMovieForm.css'
import {callAPI} from '../../../util'

export default function EditMovieForm(props) {


    const [title,setTitle]= useState(props.movieData.title)
    const [views,setViews]= useState(props.movieData.views)
    const [image,setImage]= useState(props.movieData.image)

    const [taskStatus,setTaskStatus] = useState()


    const editDetailsToServer=()=>{

        const updatedMovieData={
            title:title,
            views:views,
            image:image
        }
        callAPI({method:"PUT",requestBody:updatedMovieData,callBackFunction:function(data){
            if(data){
                setTaskStatus(true)
            }
            else{
                setTaskStatus(false)
            }

        },movieId:props.movieData.id})
    }

    return (
        <div className="container m-4 p-4 container_edit">
            <h1>Editing : {props.movieData.title}</h1>

            <div class="mb-3">
                <label for="etxMovieTitle" className="form-label">Movie Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="etxMovieTitle" placeholder="Enter Movie Title"/>
            </div>
            <div class="mb-3">
                <label for="etxMovieViews" className="form-label">Movie Views</label>
                <input type="text" value={views} onChange={(e)=>{setViews(e.target.value)}} className="form-control" id="etxMovieViews" placeholder="Enter Movie Views"/>
            </div>
            <div class="mb-3">
                <label for="etxMovieImage" className="form-label">Movie Image</label>
                <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} className="form-control" id="etxMovieImage" placeholder="Enter Movie Image URL"/>
            </div>

            <button className="btn btn-danger m-2" onClick={editDetailsToServer}>Edit</button>
            <button className="btn btn-warning m-2" onClick={() => props.setCurrentState({ mode: "LIST" })}>Back</button>

            {taskStatus==false &&<div className="alert alert-warning" role="alert">
                Failed To Update
            </div>}

            {taskStatus==true && <div className="alert alert-success" role="alert">
                Updated !
            </div>}
        
        </div>
    )
}