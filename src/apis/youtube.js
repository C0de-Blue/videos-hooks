import axios from 'axios'

const KEY = 'AIzaSyDm8jekcKwLu8yJzUrjGVry-11bFQIkMNM';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});


