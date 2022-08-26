import React from "react";
import CreatedFilter from "./CreatedFilter";
import Sort from "./Sort";
import TempFilter from "./TempFilter";



export default function FilterBar({ setCurrentPage, setOrder }){
    
    return(
        <div>
            <Sort setCurrentPage={setCurrentPage} setOrder={setOrder}/>
            <TempFilter setCurrentPage={setCurrentPage}/>
            <CreatedFilter/>
        </div>
    )
}