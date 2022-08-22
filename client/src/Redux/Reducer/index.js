import { FILTER_BY_TEMP, FILTER_CREATED, GET_ALL_DOGS, GET_DOG_DETAIL, GET_TEMPERAMENT, SORT } from "../Actions/Actions";


const initialState = {
    dogs: [],
    allDogs: [],
    dogDetail: {},
    temperaments: [],

};

export default function rootReducer(state= initialState, action){
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case GET_DOG_DETAIL:
            return {
                ...state,
                dogDetail: action.payload
            }
        case GET_TEMPERAMENT:
            return{
                ...state,
                temperaments: action.payload

            }
        case FILTER_BY_TEMP:
            const allDoguis = state.allDogs
            const tempFiltered = action.payload === 'All'? allDoguis : allDoguis.filter(a => {
                return a.temperament?.includes(action.payload)
            })
            return{
                ...state,
                dogs: tempFiltered,
            }
        case FILTER_CREATED:
            const allDogs = state.allDogs
            const created = action.payload === 'Created'? allDogs.filter(a => a.createdDb) :
            allDogs.filter(a => !a.createdDb)
            return{
                ...state,
                dogs: action.payload === 'All'? state.allDogs : created
            }
        case SORT:
            let sortDogs = action.payload ==='Asc'?
            state.dogs.sort(function (a, b) {
                if (a.name < b.name) return -1
                if (a.name > b.name) return 1
                return 0
            }) :
            state.dogs.sort(function (a, b) {
                if (a.name < b.name) return 1
                if (a.name > b.name) return -1
                return 0
            })
            return{
                ...state,
                dogs: sortDogs
            }
    
        default:
            return state;
    }
};