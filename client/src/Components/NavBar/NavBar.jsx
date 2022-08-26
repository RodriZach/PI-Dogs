import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDogs } from "../../Redux/Actions/Actions";
import SearchBar from "./SearchBar/SearchBar";


export default function NavBar(){
    const dispatch = useDispatch()

    const handleDogs = (e) => {
        e.preventDefault()
        dispatch(getAllDogs())
    }

    
    return(
        <div>
            <Link to='/home'> 
                <button onClick={e => handleDogs(e)}>Home</button>
            </Link>
            <SearchBar/>
            <Link to='/form'>
                <button>Create Dog</button>
            </Link>
        </div>
    )
}