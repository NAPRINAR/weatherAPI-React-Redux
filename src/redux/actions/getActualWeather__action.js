import axios from "axios";
import {CONSTANTS} from "../reducers/getActualWeather___reducer";

export const setWeater = (weatherData) => {
    return ({
        type: CONSTANTS.GET__WEATHER,
        payload:{
            weatherData
        }
    })
}



export const fetchWeatherData = (current) => async (dispatch) => {
    try{
        const handler = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${current}&units=metric&appid=779238931151ea72e37543c033f4d957&lang=ru`)
        const data = await handler.data
        dispatch(setWeater(data))
    }
    catch (e) {
        console.log(e)

    }

}

// export const fetchWeatherImg = (imageCode) => async(dispatch) =>{
//     const handler = await axios.get(`https://openweathermap.org/img/wn/${imageCode}@2x.png`)
//     const data = await handler
//     console.log(data)
//
// }