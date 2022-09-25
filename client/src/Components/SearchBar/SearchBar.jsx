import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchName, getAllDogs } from "../../Redux/Actions/Actions";
import style from "./SearchBar.module.css";

export default function SearchBar({ setCurrentPage, setLoad }){
    const dispatch = useDispatch()
   
    const initialName = ''
    const [input, setInput] = useState(initialName)
 
    //Autocomplete
    const allDogs = useSelector((state) => state.dogs);
    
    const [searchOptions, setSearchOptions] = useState([])
    //Autocomplete

    function handleInputChange(e) {
        e.preventDefault()
        setInput(e.target.value)
        dispatch(searchName(input))

        //autocomplete
        e.target.value !== '' && setSearchOptions(allDogs.filter(dogs => dogs.name.toLowerCase().includes(input.toLowerCase())))
        
        if( e.target.value === ''){
            setSearchOptions([])
            dispatch(getAllDogs())
        }
        //autocmplete
    }

    //Autocomplete
    function handleAutoCompleteClick(e) {
        e.preventDefault()
        const searchBar = document.getElementById('searchBar')
        searchBar.value = e.target.value

        e.target.value !== '' && setSearchOptions(allDogs.filter(dogs => dogs.name.toLowerCase().includes(e.target.value.toLowerCase())))

        setInput(e.target.value)
        
        setSearchOptions([])
        dispatch(searchName(e.target.value))
    }

    let autocomplete = searchOptions.map(option =>{
        return(
            searchOptions.length > 0 && <button className={style.autoComplete} value={option.name} key={option.name} onClick={handleAutoCompleteClick} >{option.name}</button>
        )
    })
    //Autocomplete

    function handleSubmit(e){
        e.preventDefault()
        if(!input){
            alert("Incomplete Data")
            return
        }
        setLoad(true)
        setCurrentPage(1)
        setTimeout(() => {setLoad(false)}, 3000)
        dispatch(searchName(input))
        setInput(initialName)
        
    }
    
    return(
        <div className={style.searchContainer}>
            <input 
                className={style.searchBar}
                id='searchBar'
                type="text"
                placeholder= "Dogs..."
                onChange={(e) => handleInputChange(e)}
            />
            <button type = "submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
            <div className={style.autoCompleteContainer}>
                {autocomplete}
            </div>
        </div>
    )
}

// return(
    //     <div>           
    //         <form onSubmit={(e) => handleSubmit(e)}>

    //             <input
    //                 type="text"
    //                 id={input}
    //                 autoComplete="on"
    //                 onChange={(e) => handleInputChange(e)}
    //                 placeholder='Search dog...'
    //                 value={input}     
    //             />  
    //             <div>
    //                 {autocomplete}
    //             </div>

    //         </form>
    //     </div>
    // )