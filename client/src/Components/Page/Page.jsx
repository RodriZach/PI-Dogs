import React from "react";
import styles from "./Page.module.css";

export default function Page({dogsPerPage, allDogs, paginated}){
    const pages = []
    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pages.push(i)
    }
    return(
        <div>
            <nav>
                <ul className={styles.page}>
                    {pages?.map(n => (
                        
                            <li key={n} >
                                <button className={styles.button} onClick={() => paginated(n)}>{n}</button>
                            </li>
                        )
                    )}
                </ul>
                
            </nav>
        </div>
    )
}