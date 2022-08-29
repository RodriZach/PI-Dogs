import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getTemperament } from "../../Redux/Actions/Actions";
import NavBar from "../NavBar/NavBar";
import Dogs from "../Home/Dogs/Dogs";
import Page from "../Page/Page";
import FilterBar from "../FilterBar/FilterBar";
import styles from "../Home/Home.module.css";


export default function Home() {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs);

    const [currentPage, setCurrentPage] = useState(1)
    const [order, setOrder] = useState('')
    const [dogsPerPage, setDogsPerPage] = useState(8)
    const [load, setLoad] = useState(false)


    const lastDog = currentPage * dogsPerPage
    const firstDog = lastDog - dogsPerPage
    const currentDogs = allDogs?.slice(firstDog, lastDog)

    const paginated = (n) => {
        setCurrentPage(n)
    }

    useEffect(() => {
        setLoad(true)
        setTimeout(() => { setLoad(false) }, 4000)
        dispatch(getAllDogs())
        dispatch(getTemperament())
    }, [dispatch]);


    return (
        <div className={styles.back_image}>
            <NavBar setLoad={setLoad} />
            <FilterBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
            <Page
                dogsPerPage={dogsPerPage}
                allDogs={allDogs.length}
                paginated={paginated}
            />
            <Dogs
                currentDogs={currentDogs}
                load={load}
            />
            <Page
                dogsPerPage={dogsPerPage}
                allDogs={allDogs.length}
                paginated={paginated}
            />

        </div>
    )

}