import React from "react";
import Dog from "./Dog";



export default function Dogs({currentDogs}) {
    
    return (
        <div>  
            {
                currentDogs && currentDogs.map(a => {
                    return (
                        <div key={a.id}>
                            <Dog
                                id={a.id}
                                img={a.image}
                                name={a.name}
                                weight={a.weight}
                                temperament={!a.createdDb ? a.temperament : a.temperaments.map(d => d.name).join(', ')}
                            />
                        </div>
                    )
                })
            }
            
        </div>
    )
}