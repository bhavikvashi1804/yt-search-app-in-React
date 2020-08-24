import axios from 'axios';

import YT_API from './yt_APIKEY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: YT_API
    }
});