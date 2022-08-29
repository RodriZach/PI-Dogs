import React from "react";
import { Link } from "react-router-dom";
import styles from "../Dogs/Dog.module.css";

export default function Dog({ id, img, name, weight, temperament }) {
    return (
        <div className={styles.dog}>
            <Link to={`/home/${id}`} style={{ textDecoration: 'none' }}>
                <img src={img} alt=""  className={styles.img} />
                <div>
                <h2 className={styles.infoName}>{name}</h2>
                <h3 className={styles.info}>Weight: {weight}</h3>
                <h3 className={styles.info}>Temperaments:</h3>
                <p className={styles.info}>{temperament}</p>
                </div>
            </Link>
        </div>
    )
}