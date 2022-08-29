import React from "react";
import { useDispatch } from "react-redux";
import { weight } from "../../Redux/Actions/Actions";
import styles from "../FilterBar/FilterBar.module.css";


export default function Weigth({ setCurrentPage, setOrder }){
    const dispatch = useDispatch()

    function handleWeight(e) {
        e.preventDefault()
        dispatch(weight(e.target.value))
        setCurrentPage(1)
        setOrder(`${e.target.value}`)
    }

    return(
        <div>
            <h3 className={styles.title}>Weight</h3>
            <select onChange={e => handleWeight(e)}>
                <option value='higher'>Higher</option>
                <option value='lower'>Lower</option>
            </select>
        </div>
    )
}