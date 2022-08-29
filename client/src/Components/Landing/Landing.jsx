import React from "react";
import { Link } from "react-router-dom";
import styles from '../Landing/Landing.module.css';
import Logo from '../../img/Logo.png'

export default function Landing() {
    return (
        <div className={styles.back_image}>
            <div className={styles.divStyle}>
                <img className={styles.logo} src={Logo} alt="" />
            </div>
            <Link to="/home">
                <button className={styles.button} >GUAAAU!!</button>
            </Link>
        </div >
    )
}