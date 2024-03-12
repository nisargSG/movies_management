import { useState } from 'react';
import MovieList from './MovieList';
import EditMovieForm from './EditMovieForm';
import AddMovieForm from './AddMovieForm';

export default function MoviesManagement(){

    //Track Current Mode
    const [currentState,setCurrentState]=useState({mode:"LIST"})

    //Select Componenent from selector based on current mode
    const componentSelector={
        "LIST":<MovieList setCurrentState={setCurrentState} />,
        "EDIT":<EditMovieForm setCurrentState={setCurrentState} movieData={currentState.movieData}/>,
        "ADD":<AddMovieForm setCurrentState={setCurrentState} />
    }

    //show selected componenent
    return(componentSelector[currentState.mode]);
}