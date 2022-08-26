import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../../Redux/Actions/Actions";

export default function SearchBar(){
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
        if(!e.target.value || !searchName(e.target.value)){
            alert("Not Found or Incomplete Data")
            return
        }
        dispatch(searchName(input))
        setInput(initialName)
        
    }
    return(
        <div>
            <input 
                type='text' 
                placeholder = 'Dog Name...' 
                onChange = {e => handleInputChange(e)} 
                onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}/>
            <button 
                type='submit' 
                onClick={e => handleSubmit(e)}
                >Search</button>
            
        </div>
    )
}