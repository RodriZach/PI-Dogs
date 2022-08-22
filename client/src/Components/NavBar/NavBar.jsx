import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDogs } from "../../Redux/Actions/Actions";


export default function NavBar(){
    const dispatch = useDispatch()
    const handleDogs = () => {
        dispatch(getAllDogs())
    }
    
    return(
        <div>
            <Link to='/home'> 
                <button onClick={(e) => handleDogs()}>Home</button>
            </Link>
        </div>
    )
}