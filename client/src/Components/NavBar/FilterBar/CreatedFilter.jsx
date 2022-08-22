import React from "react";
import { useDispatch } from "react-redux";
import { filterCreated } from "../../../Redux/Actions/Actions";

export default function CreatedFilter() {
    const dispatch = useDispatch()

    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value))
    }
    return(
        <div>
            <h3>Created</h3>
            <select onChange={e => handleFilterCreated(e)}>
                <option value='All'>All</option>
                <option value='Created'>Created</option>
                <option value='API'>API</option>
            </select>
        </div>
    )
}