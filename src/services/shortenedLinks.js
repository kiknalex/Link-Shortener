import axios from 'axios'

const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const baseUrl = "https://api.shrtco.de/v2/shorten?"

const shortenLink = (link) => {
    const request = axios.get(`${baseUrl}url=${link}`, {
        headers: {
            crossDomain: true,
            'Access-Control-Allow-Origin': '*'
            }
    });
    return request.then(response => response.data);
}

export default ({ shortenLink })