import React from "react";
import { useDispatch } from "react-redux";
import { sort } from "../../../Redux/Actions/Actions";

export default function Sort({setCurrentPage, setOrder}) {
    const dispatch = useDispatch()
    
    function handleSort(e) {
        e.preventDefault()
        dispatch(sort(e.target.value))
        setCurrentPage(1)
        setOrder(`${e.target.value}`)

    }
    return(
        <div>
            <h3>Sort</h3>
            <select onChange={e => handleSort(e)}>
                <option value='Asc'>Ascendente</option>
                <option value='Desc'>Descendente</option>
            </select>
        </div>
    )
}