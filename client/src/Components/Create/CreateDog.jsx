import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperament, postDog } from "../../Redux/Actions/Actions";
import { Link, useHistory } from "react-router-dom";
import styles from "../Create/CreateDog.module.css";


function validate(input) {
    let errors = {}
    if (!input.name) {
        errors.name = 'I need a name!!'
    }
    else if (!input.height_min || input.height_min <= 0) {
        errors.height_min = 'The height can not be less than 0 cm!!'
    }
    else if (!input.height_max || Number(input.height_max) < input.height_min) {
        errors.height_max = 'The maximum height can not be less than the minimum!!'
    }
    else if (!input.weight_min || input.weight_min <= 0) {
        errors.weight_min = 'The weight can not be less than 0 kg!!'
    }
    else if (!input.weight_max || Number(input.weight_max) < input.weight_min) {
        errors.weight_max = 'The maximum weight can not be less than the minimum!!'
    }
    else if (input.life_span_min <= 0) {
        errors.life_span_min = 'Can not live so little!!'
    }
    else if (!input.life_span_max || Number(input.life_span_max) < input.life_span_min) {
        errors.life_span_max = 'Can not live less than the minimum!!'
    }
    return errors

}

export default function CreateDog() {

    const dispatch = useDispatch()
    const history = useHistory()

    const temps = useSelector((state) => state.temperaments)

    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        life_span_min: '',
        lif_span_max: '',
        image: '',
        temperaments: []
    })
    useEffect(() => {
        dispatch(getTemperament())
    }, [dispatch])

    function handleChange(e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    function handleSelect(e) {
        e.preventDefault()
        setInput({
            ...input,
            temperaments: [...input.temperaments, e.target.value]
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postDog(input))
        alert('Perro creado!!')
        setInput({
            name: '',
            height_min: '',
            height_max: '',
            weight_min: '',
            weight_max: '',
            life_span_min: '',
            lif_span_max: '',
            image: '',
            temperaments: []
        })
        history.push('/home')
    }
    function handleDelete(e) {
        e.preventDefault()
        setInput({
            ...input,
            temperaments: input.temperaments.filter(a => a !== e.target.value)
        })
    }

    return (
        <div className={styles.img}>
            <div className={styles.back}>
                <Link to='/home'>
                    <button className={styles.button}>Home</button>
                </Link>
                <h1>Create Dog</h1>
                <span className={styles.warning}>Fields with * are required</span>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className={styles.fields}>
                        <label>*Name: </label>
                        <input
                            type='text'
                            value={input.name}
                            name='name'
                            onChange={e => handleChange(e)}>
                        </input>
                        {errors.name && (<p className={styles.warning}>{errors.name}</p>)}
                    </div>
                    <div className={styles.fields}>
                        <label>*Height min(cm): </label>
                        <input
                            type='number'
                            value={input.height_min}
                            name='height_min'
                            onChange={e => handleChange(e)}>
                        </input>
                        {errors.height_min && (<p className={styles.warning}>{errors.height_min}</p>)}
                    </div>
                    <div className={styles.fields}>
                        <label>*Height max(cm): </label>
                        <input
                            type='number'
                            value={input.height_max}
                            name='height_max'
                            onChange={e => handleChange(e)}>
                        </input>
                        {errors.height_max && (<p className={styles.warning}>{errors.height_max}</p>)}
                    </div>
                    <div className={styles.fields}>
                        <label>*Weight min(kg): </label>
                        <input
                            type='number'
                            value={input.weight_min}
                            name='weight_min'
                            onChange={e => handleChange(e)}>
                        </input>
                        {errors.weight_min && (<p className={styles.warning}>{errors.weight_min}</p>)}
                    </div>
                    <div className={styles.fields}>
                        <label>*Weight max(kg): </label>
                        <input
                            type='number'
                            value={input.weight_max}
                            name='weight_max'
                            onChange={e => handleChange(e)}>
                        </input>
                        {errors.weight_max && (<p className={styles.warning}>{errors.weight_max}</p>)}
                    </div>
                    <div className={styles.fields}>
                        <label>Life Span min: </label>
                        <input
                            type='number'
                            value={input.life_span}
                            name='life_span_min'
                            onChange={e => handleChange(e)}>
                        </input>
                        {errors.life_span_min && (<p className={styles.warning}>{errors.life_span_min}</p>)}
                    </div>
                    <div className={styles.fields}>
                        <label>Life Span max: </label>
                        <input
                            type='number'
                            value={input.life_span}
                            name='life_span_max'
                            onChange={e => handleChange(e)}>
                        </input>
                        {errors.life_span_max && (<p className={styles.warning}>{errors.life_span_max}</p>)}
                    </div>
                    <div className={styles.fields}>
                        <label>Image(url):</label>
                        <input
                            type='text'
                            value={input.image}
                            name='image'
                            onChange={e => handleChange(e)}>
                        </input>
                    </div>
                    <div className={styles.fields}>
                        <label>Temperaments</label>
                        <select onChange={e => handleSelect(e)}>
                            {temps?.sort(function (a, b) {
                                if (a.name < b.name) return -1
                                if (a.name > b.name) return 1
                                return 0
                            }).map(a => {
                                return (
                                    <option value={a.name} name={a.name} key={a.id}>{a.name}</option>
                                )
                            })}
                        </select>
                        <div className={styles.temp1}>
                            {input.temperaments && input.temperaments.map(temp => (
                                <div className={styles.temps} key={temp}>
                                    <button className={styles.btnTemp} value={temp} onClick={e => handleDelete(e)}>X</button>
                                    <span>{temp}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {errors &&
                        !input.name ||
                        errors.name ||
                        errors.height_min ||
                        errors.height_max ||
                        errors.weight_min ||
                        errors.weight_max ||
                        errors.life_span_min ||
                        errors.life_span_max
                        ?
                        (<button className={styles.buttonDis} type='submit' disabled={true}>Create</button>)
                        :
                        (<button className={styles.button} type='submit' disabled={false}>Create</button>)
                    }
                </form>
            </div>
        </div>
    )
}