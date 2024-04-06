require('dotenv').config()

// console.log(process.env.APP_ID)

const{
    APP_ID,
    Q,
    CNT,
    UNITS,
    LANG_WEATHER,
    PROTOCOL,
    BASE_URL,
} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APP_ID}&q=${Q}&cnt=${CNT}&units=${UNITS}&lang=${LANG_WEATHER}`

console.log(url)

const axios = require('axios')

axios.get(url)
    .then(response => {
        console.log(response.data)
        console.log('***************************')
        return response.data
    })
    .then(response => {
        console.log(`CNT: ${response.cnt}`)
        console.log('***************************')
        return response
    })
    .then(response => {
        for (let previsao of response.list) {
            console.log('***************************')
            console.log(previsao)
            console.log(`Data: 
            ${new Date(previsao.dt * 1000).toTimeString()}:
            max: ${previsao.main.temp_max}
            min: ${previsao.main.temp_min}
            descrição: ${previsao.weather[0].description}`)
            // mostrar a temperatura
            
            // mostrar a descricao do tempo
            console.log(`Descrição: ${previsao.weather[0].description}`)

        }
        return response
    })



/* SAKAS STYLE */
// const apiKey = process.env.API_KEY

// const coords = [-23.647768248377222, -46.57394459603714]

// const getWeatherData = async () => {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${apiKey}`
//   )

//   const weatherData = await response.json()

//   console.log(weatherData)
// }

// getWeatherData()

