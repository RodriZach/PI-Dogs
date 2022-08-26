import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperament, postDog } from "../../Redux/Actions/Actions";
import { Link, useHistory } from "react-router-dom";


function validate(input) {
    let errors = {}
    if (!input.name) {
        errors.name = 'La raza debe tener un nombre!!'
    }
    else if (!input.height_min || input.height_min <= 0) {
        errors.height_min = 'Un perro no puede medir menos de 0 cm!!'
    }
    else if (!input.height_max || input.height_max < input.height_min) {
        errors.height_max = 'La altura máxima no puede ser menor que la mínima!!'
    }
    else if (!input.weight_min || input.weight_min <= 0) {
        errors.weight_min = 'Un perro no puede pesar menos de 0 kg!!'
    }
    else if (!input.weight_max || input.weight_max < input.weight_min) {
        errors.weight_max = 'El peso máximo no puede ser menor que el mínimo!!'
    }
    else if (input.life_span <= 0) {
        errors.life_span = 'No puede vivir tan poco!!'
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
        life_span: '',
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
            life_span: '',
            image: '',
            temperaments: []
        })
        history.push('/home')
    }

    return (
        <div>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <h1>Crea un perro!!</h1>
            <span>Los campos con * son obligatorios</span>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>*Nombre de la raza: </label>
                    <input
                        type='text'
                        value={input.name}
                        name='name'
                        onChange={e => handleChange(e)}>
                    </input>
                    {errors.name && (<p>{errors.name}</p>)}
                </div>
                <div>
                    <label>*Altura mínima(cm): </label>
                    <input
                        type='number'
                        value={input.height_min}
                        name='height_min'
                        onChange={e => handleChange(e)}>
                    </input>
                    {errors.height_min && (<p>{errors.height_min}</p>)}
                </div>
                <div>
                    <label>*Altura máxima(cm): </label>
                    <input
                        type='number'
                        value={input.height_max}
                        name='height_max'
                        onChange={e => handleChange(e)}>
                    </input>
                    {errors.height_max && (<p>{errors.height_max}</p>)}
                </div>
                <div>
                    <label>*Peso mínimo(kg): </label>
                    <input
                        type='number'
                        value={input.weight_min}
                        name='weight_min'
                        onChange={e => handleChange(e)}>
                    </input>
                    {errors.weight_min && (<p>{errors.weight_min}</p>)}
                </div>
                <div>
                    <label>*Peso máximo(kg): </label>
                    <input
                        type='number'
                        value={input.weight_max}
                        name='weight_max'
                        onChange={e => handleChange(e)}>
                    </input>
                    {errors.weight_max && (<p>{errors.weight_max}</p>)}
                </div>
                <div>
                    <label>Años de vida: </label>
                    <input
                        type='number'
                        value={input.life_span}
                        name='life_span'
                        onChange={e => handleChange(e)}>
                    </input>
                    {errors.life_span && (<p>{errors.life_span}</p>)}
                </div>
                <div>
                    <label>Imagen(url):</label>
                    <input
                        type='text'
                        value={input.image}
                        name='image'
                        onChange={e => handleChange(e)}>
                    </input>
                </div>
                <div>
                    <label>Temperamentos</label>
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
                    <div>
                        {input.temperaments && input.temperaments.map(temp => (
                            <div key={`${temp}`}>
                                <label>{temp}</label>
                                <button>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>

                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}