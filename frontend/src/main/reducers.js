import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastReducer } from 'react-redux-toastr'
import loadingReducer from '../utils/loading/loadingReducer'
import postReducer from '../pages/post/postReducer'

const rootReducer = combineReducers({
    form: formReducer,
    toastr: toastReducer,
    loading: loadingReducer,
    postReducer: postReducer
});

export default rootReducer;