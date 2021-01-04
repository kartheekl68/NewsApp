
import axios from 'axios';

const host = 'http://newsapi.org/v2/';
// const host = 'http://news.org/v2/';
const apiKey = '513be178d0924858977af297d9cc0811';

export const sharedService = {

    getHeadLines: (route, params) => {
        
        if (route === 'everything') {
            delete params.country;
        }

        return axios.get(host+route, {
            params: {
                ...params,
                apiKey
            }
        }).then((res) => res).catch(err => err);

    }

}