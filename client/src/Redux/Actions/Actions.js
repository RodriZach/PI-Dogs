import axios from "axios";

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const GET_TEMPERAMENT = "GET_TEMPERAMENT";
export const FILTER_BY_TEMP = "FILTER_BY_TEMP";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const CLEAR_HOME = "CLEAR_HOME";
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_SORT = "FILTER_SORT";
export const FILTER_WEIGHT = "FILTER_WEIGHT";
export const SEARCH_NAME = "SEARCH_NAME";
export const POST_DOG = "POST_DOG";



export const getAllDogs = () => {
    return async function (dispatch) {
        return await fetch('http://localhost:3001/dogs')
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: GET_ALL_DOGS,
                    payload: json
                })
            })
    }
};

// export const getDogDetail = (id) => {
//     return async function (dispatch) {
//         var json = await axios.get('http://localhost:3001/dogs/' + id)
//         return dispatch({
//             type: GET_DOG_DETAIL,
//             payload: json.data
//         })
//     }

// };

export const getDogDetail = (id) => {
    return async function (dispatch) {
        return await fetch('http://localhost:3001/dogs/' + id)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: GET_DOG_DETAIL,
                    payload: json
                })
            })
    }
};

export const searchName = (name) => {
    return async function (dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/dogs?name=` + name)
            return dispatch({
                type: SEARCH_NAME,
                payload: json.data
            })
        } catch (error) {
            alert('Dog not found')
        }

    }
}

export const getTemperament = () => {
    return async function (dispatch) {
        let json = await axios.get('http://localhost:3001/temperaments')
        return dispatch({
            type: GET_TEMPERAMENT,
            payload: json.data
        })
    }
};

export const filterDogByTemp = (value) => {
    return {
        type: FILTER_BY_TEMP,
        payload: value
    }
};

export const clearDetail = () => {
    return {
        type: CLEAR_DETAIL
    }
};

export const clearHome = () => {
    return {
        type: CLEAR_HOME
    }
}

export const filterCreated = (value) => {
    return {
        type: FILTER_CREATED,
        payload: value
    }
};

export const sort = (value) => {
    return {
        type: FILTER_SORT,
        payload: value
    }
};

export const weight = (value) => {
    return {
        type: FILTER_WEIGHT,
        payload: value
    }
};

export const postDog = (payload) => {
    return async function (dispatch) {
        let json = await axios.post('http://localhost:3001/dogs/', payload)
        return json
    }
}