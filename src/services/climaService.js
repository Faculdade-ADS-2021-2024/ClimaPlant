import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/'
});

export async function getClima(city) {
    return await api.get(`data/2.5/forecast?q=${city},br&appid=6f387530acadc113af087d1decb03f01&units=metric&lang=pt_br`);
}