import React from "react";
import { useDispatch } from "react-redux";
import { sort } from "../../Redux/Actions/Actions";
import styles from "../FilterBar/FilterBar.module.css";

export default function Sort({setCurrentPage, setOrder}) {
    const dispatch = useDispatch()
    
    function handleSort(e) {
        e.preventDefault()
        dispatch(sort(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)

    }
    return(
        <div>
            <h3 className={styles.title}>Order</h3>
            <select onChange={e => handleSort(e)}>
                <option hidden selected>Alphabetic</option>
                <option value='Asc'>A-Z</option>
                <option value='Desc'>Z-A</option>
            </select>
        </div>
    )
}