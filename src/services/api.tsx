import axios from "axios";

export const api = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=98cf1061908a4efdacf0d911923ee9d8',
});