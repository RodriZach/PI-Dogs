import React from "react";
import { Link } from "react-router-dom";

export default function Dog({id,img, name, weight, temperament}){
    return(
        <div>
            <img src={img} alt=""/>
            <Link to={`/home/${id}`}>
                <h2>{name}</h2>
            </Link>
            <h3>{weight}</h3>
            <p>{temperament}</p>
        </div>
    )
}