import React from "react";
import Dog from "./Dog";
import Loader from "../../Loader/Loader";
import styles from "../Dogs/Dogs.module.css";



export default function Dogs({ currentDogs, load }) {

    return (
        <div className={styles.dogs} >
            {load ? <div><Loader /></div> :
                currentDogs?.map(a => {
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