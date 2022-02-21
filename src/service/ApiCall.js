import { apiConfig } from './ApiConfig';


export async function apiCalling(type, url, header, body) {
    let h = apiConfig.header;
    header = { ...header, ...h };
    let controller = new AbortController()
    setTimeout(() => controller.abort(), 1000 * 60);
    if (type == "POST") {
        return fetch(apiConfig.BASE_URL + url, {
            method: 'post',
            headers: header,
            body: body,
            signal: controller.signal
        })
    }
    else {
        return fetch(apiConfig.BASE_URL + url, {
            method: 'get',
            headers: header,
        })
    }
}