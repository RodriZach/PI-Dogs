import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../Redux/Actions/Actions";

export default function SearchBar({setLoad}){
    const dispatch = useDispatch()
   
    const initialName = ''
    const [input, setInput] = useState(initialName)
 

    function handleInputChange(e) {
        e.preventDefault()
        setInput(e.target.value)
        console.log(input)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(!input){
            alert("Incomplete Data")
            return
        }
        setLoad(true)
        setTimeout(() => {setLoad(false)}, 3000)
        dispatch(searchName(input))
        setInput(initialName)
        
    }
    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    id={input}
                    autoComplete="off"
                    onChange={(e) => handleInputChange(e)}
                    placeholder='Search dog...'
                    value={input}
                />

            </form>
        </div>
    )
}