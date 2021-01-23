import axios from 'axios'

const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const baseUrl = "https://api.shrtco.de/v2/shorten?"

const shortenLink = (link) => {
    const request = axios.get(`${baseUrl}url=${link}`);
    return request.then(response => response.data, {
        headers: {
        crossDomain: true,
        'Access-Control-Allow-Origin': '*'
        } 
    });
}

export default ({ shortenLink })