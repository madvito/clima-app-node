const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9a512f3ed3e4f1003b2ef14bd37460a9&units=metric`);
    return resp.data.main.temp;

}

module.exports = {
    getClima
}