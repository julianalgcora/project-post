import * as postTypes from './postTypes'

const INITIAL_STATE_POST =  {
    postList: {}, 
    postStatusGet: false
}

export default function(state = INITIAL_STATE_POST, action){
    switch(action.type){
        case postTypes.POST_LIST:
            return {...state, postList:action.payload}
        case postTypes.POST_STATUS_GET:
            return {...state, postStatusGet:action.payload}
        default:
            return state;    
    }
}
