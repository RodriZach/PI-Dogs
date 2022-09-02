import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from '../Landing/Landing.module.css';
import Logo from '../../img/Logo.png'
import { clearHome } from "../../Redux/Actions/Actions";
import { useDispatch } from "react-redux";

export default function Landing() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearHome())
    },[dispatch])

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