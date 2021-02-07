import { getPost, savePost, updatePost } from './postService';
import * as loading from '../../utils/loading/loadingActions'
import { toastr } from 'react-redux-toastr'
import * as postTypes from './postTypes';

export function handleAllPost() {
    return async dispatch => {
        dispatch([
            loading.onFetchLoading(),
            onFetchGetPostStatus(false)
        ]);
        try {
            const response = await getPost();
            if (response !== null) {
                dispatch([
                    setAllPost(response),
                    loading.onFetchLoading()
                ]);
            } else dispatch([
                setAllPost({}),
                loading.onFetchLoading()
            ]);
        } catch (err) {
            console.log('Error on Select: ' + err),
            dispatch(loading.onFetchLoading());
        }
    }
}


export async function handlePostSubmit(post) {
    return async dispatch => {
        dispatch([
            loading.onFetchLoading(),
            onFetchGetPostStatus(false)
        ]);
        try {
            const response = await savePost(post);
            if (response !== null) {
                console.log('Success on Insert');
            }
            dispatch([
                onFetchGetPostStatus(true),
                loading.onFetchLoading()
            ]);
        } catch (err) {
            dispatch([
                loading.onFetchLoading(),
                onFetchGetPostStatus(false)
            ]);
            console.log('Error on Insert: ' + err);
            return null;
        }
    }
}


export async function handlePostUpdate(post) {
    return async dispatch => {
        dispatch([
            loading.onFetchLoading(),
            onFetchGetPostStatus(false)
        ]);
        try {
            const response = await updatePost(post);
            if (response !== null) {
                console.log('Success on Update');
            }
            dispatch([
                onFetchGetPostStatus(true),
                loading.onFetchLoading()
            ]);
        } catch (err) {
            dispatch([
                loading.onFetchLoading(),
                onFetchGetPostStatus(false)
            ]);
            console.log('Error on Update: ' + err);
            return null;
        }
    }
}


export function setAllPost(response) {
    return dispatch => {
        dispatch([
            onFetchAllPost(response)
        ]);       
    }
}


export function onFetchGetPostStatus(status) {
    return { type: postTypes.POST_STATUS_GET, payload: status }
}


export function onFetchAllPost(result) {
    return { type: postTypes.POST_LIST, payload: result }
}