import React from "react";
import Dog from "./Dog";
import Loader from "../../Loader/Loader";
import styles from "../Dogs/Dogs.module.css";
import img from "../../../img/perrollorando.jpg";


export default function Dogs({ currentDogs, load }) {

    return (
        <div className={styles.dogs} >
            {load ? <div><Loader /></div> :
                currentDogs.length ? currentDogs.map(a => {
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
                    :
                    <div>
                        <h1>Dog not found</h1>
                        <img src={img} alt="" className={styles.not}/>
                    </div>
            }

        </div>
    )
}