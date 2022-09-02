import { CLEAR_DETAIL, CLEAR_HOME, FILTER_BY_TEMP, FILTER_CREATED, GET_ALL_DOGS, GET_DOG_DETAIL, GET_TEMPERAMENT, POST_DOG, SEARCH_NAME, FILTER_SORT, FILTER_WEIGHT } from "../Actions/Actions";


const initialState = {
    dogs: [],
    allDogs: [],
    dogDetail: {},
    temperaments: [],

};

export default function rootReducer(state = initialState, action) {
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
        case SEARCH_NAME:
            return {
                ...state,
                dogs: action.payload
            }
        case GET_TEMPERAMENT:
            return {
                ...state,
                temperaments: action.payload

            }
        case FILTER_BY_TEMP:
            const allDoguis = state.allDogs
            const tempFiltered = action.payload === 'All' ? state.allDogs : allDoguis.filter(a => {
                return a.temperament?.includes(action.payload)
            })
            return {
                ...state,
                dogs: tempFiltered,
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                dogDetail: {}
            }
        case CLEAR_HOME:
            return {
                ...state,
                dogs: []
            }
        case FILTER_CREATED:
            const allDogs = state.allDogs
            const created = action.payload === 'All' ? allDogs : 
                action.payload === 'Created' ? allDogs.filter(a => a.createdDb) :
                allDogs.filter(a => !a.createdDb)
            return {
                ...state,
                dogs: created
            }
        case FILTER_SORT:
            let sortDogs = action.payload === 'Asc' ?
                state.dogs.sort(function (a, b) {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                    return 0
                }) :
                state.dogs.sort(function (a, b) {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
                    return 0
                })
            return {
                ...state,
                dogs: sortDogs
            }
        case FILTER_WEIGHT:
            let weightDogs = action.payload === 'higher' ?
                state.dogs.sort(function (a, b) {
                    if (parseInt(a.weight.split("-")[0]) > parseInt(b.weight.split("-")[0])) {
                        return -1;
                    }
                    if (parseInt(b.weight.split("-")[0]) > parseInt(a.weight.split("-")[0])) {
                        return 1;
                    }
                    return 0;
                }) :
                state.dogs.sort(function (a, b) {
                    if (parseInt(a.weight.split("-")[0]) > parseInt(b.weight.split("-")[0])) {
                        return 1;
                    }
                    if (parseInt(b.weight.split("-")[0]) > parseInt(a.weight.split("-")[0])) {
                        return -1;
                    }
                    return 0;
                })
               
            return {
                ...state,
                dogs: weightDogs
            }
        case POST_DOG:
            return {
                ...state,
            }

        default:
            return state;
    }
};