import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDogByTemp } from "../../Redux/Actions/Actions";

export default function TempFilter({ setCurrentPage }) {
    const dispatch = useDispatch()

    function handleFilterTemp(e) {
        e.preventDefault()
        dispatch(filterDogByTemp(e.target.value))
        setCurrentPage(1)
    }
    const temp = useSelector(state => state.temperaments)
    return (
        <div>
            <h3>Temperaments</h3>
            <select onChange={e => handleFilterTemp(e)}>
                <option key={1 + ' algo'} value='All'>All</option>
                {temp?.sort(function (a, b) {
                    if (a.name < b.name) return -1
                    if (a.name > b.name) return 1
                    return 0
                }).map(a => {
                    return (
                        <option value={a.name} key={a.id}>{a.name}</option>
                    )
                })}
            </select>
        </div>
    )
}