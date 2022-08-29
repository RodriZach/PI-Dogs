import React from "react";
import CreatedFilter from "./CreatedFilter";
import Sort from "./Sort";
import TempFilter from "./TempFilter";
import styles from "../FilterBar/FilterBar.module.css";
import Weigth from "./Weight";


export default function FilterBar({ setCurrentPage, setOrder }){
    
    return(
        <div className={styles.filterBar}>
            <Sort setCurrentPage={setCurrentPage} setOrder={setOrder}/>
            <Weigth setCurrentPage={setCurrentPage} setOrder={setOrder}/>
            <TempFilter setCurrentPage={setCurrentPage}/>
            <CreatedFilter/>
        </div>
    )
}