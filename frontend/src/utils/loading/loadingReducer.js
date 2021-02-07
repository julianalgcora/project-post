import * as loadingTypes from './loadingTypes';

const INITIAL_STATE = {
    loading: false
}

export default function(state = INITIAL_STATE, action){
    switch(action.type) {
        case loadingTypes.LOADING:
            return {...state, loading: state.loading === false ? true : false }
        default:
            return state;    
    }
}