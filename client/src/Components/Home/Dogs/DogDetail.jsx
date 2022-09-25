import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { clearHome, getDogDetail } from "../../../Redux/Actions/Actions";
import Loader from "../../Loader/Loader";
import styles from "../Dogs/DogDetail.module.css";

export default function DogDetail() {

    const dispatch = useDispatch()
    const { id } = useParams()
    const dogDetail = useSelector((state) => state.dogDetail)

    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
        setTimeout(() => { setLoad(false) }, 3000)
        dispatch(getDogDetail(id))
        dispatch(clearHome())
    }, [dispatch, id])

    return (
        <div className={styles.back}>
            <Link to='/home'>
                <button className={styles.button}>Home</button>
            </Link>
            {load ? <div className={styles.loader}><Loader /></div> :
                <div className={styles.detail}>
                    <div className={styles.img}>
                        <img className={styles.img_detail} src={dogDetail.image} alt={dogDetail.name}></img>
                    </div>
                    <div className={styles.info}>
                        <h1>{dogDetail.name}</h1>
                        <h2>Weight: {dogDetail.weight} </h2>
                        <h2>Height: {dogDetail.height} </h2>
                        <h2>Life Span: {dogDetail.life_span}</h2>
                        <h2>Temperaments:</h2>
                        <h2>{!dogDetail.createdDb ? dogDetail.temperament : dogDetail.temperaments.map(e => " " + e.name).toString().slice(1)}</h2>
                    </div>
                </div>
            }
            <div class="cho-container"></div>

        </div>

    )
}