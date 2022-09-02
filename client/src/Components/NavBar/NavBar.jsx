import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDogs } from "../../Redux/Actions/Actions";
import SearchBar from "../SearchBar/SearchBar";
import styles from "../NavBar/NavBar.module.css"
import Logo from "../../img/Logo.png"

export default function NavBar({ setCurrentPage, setLoad }) {
    const dispatch = useDispatch()

    const handleDogs = (e) => {
        e.preventDefault()
        setLoad(true)
        setCurrentPage(1)
        setTimeout(() => { setLoad(false) }, 3000)
        dispatch(getAllDogs())
    }


    return (
        <div className={styles.nav}>
            <Link to='/' className={styles.linkLogo}>
                <img className={styles.logo} src={Logo} alt="" />
            </Link>
            <Link to='/home'>
                <button className={styles.button} onClick={e => handleDogs(e)}>Refresh</button>
            </Link>
            <Link to='/form'>
                <button className={styles.button}>Create Dog</button>
            </Link>
            <SearchBar setLoad={setLoad} />
        </div>
    )
}