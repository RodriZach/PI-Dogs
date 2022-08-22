import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDogDetail } from "../../../Redux/Actions/Actions";

export default function DogDetail() {

    const dispatch = useDispatch()
    const { id } = useParams()
    const dogDetail = useSelector((state) => state.dogDetail)

    useEffect(() => {
        dispatch(getDogDetail(id))
    }, [dispatch, id])

    return (
        <div>

            <div>
                <div>
                    <Link to='/home'>
                        <button>Home</button>
                    </Link>
                </div>
                <img src={dogDetail.image} alt={dogDetail.name}></img>
                <h1>Nombre de la raza: {dogDetail.name}</h1>
                <h2>Peso: {dogDetail.weight} </h2>
                <h2>Altura: {dogDetail.height} </h2>
                <h2>Años de vida: {dogDetail.life_span}</h2>
                <h2>Temperamentos:</h2>
                <h2>{!dogDetail.createdDb? dogDetail.temperament : dogDetail.temperaments.map(el => " " + el.name).toString().slice(1)}</h2>
            </div>

        </div>

    )
}