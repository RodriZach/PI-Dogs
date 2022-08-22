import React from "react";

export default function Page({dogsPerPage, allDogs, paginated}){
    const pages = []
    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pages.push(i)
    }
    return(
        <div>
            <nav>
                <ul>
                    {pages?.map(n => (
                        
                            <li key={n} >
                                <button onClick={() => paginated(n)}>{n}</button>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </div>
    )
}