import axios from 'axios';

const api = 'http://127.0.0.1:5001';

export async function getPost() {
    try{
        const response = await axios({
            method: 'get',
            url: `${api}/api/v1/post`
        });
        return response.data;
    } catch (err) {
        console.log('Error on Select Service: ' + err);
        return null;
    }
}

export async function savePost(post) {
    try{
        const response = await axios({
            method: 'post',
            url: `${api}/api/v1/post`,
            data: post
        });
        return response;
    } catch (err) {
        console.log('Error on Insert Service: ' + err);
        return null;
    }
}

export async function updatePost(post) {
    try{
        const response = await axios({
            method: 'put',
            url: `${api}/api/v1/post/${post.id}`,
            data: post
        });
        return response;
    } catch (err) {
        console.log('Error on Update Service: ' + err);
        return null;
    }
}
