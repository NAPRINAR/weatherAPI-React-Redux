import React, {useEffect, useState} from 'react';
import styles from "./WeatherBox.module.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchWeatherData, fetchWeatherImg} from "../../redux/actions/getActualWeather__action";
import ButtonContent from "./ButtonContent/ButtonContent";
import SearchForm from "./SearchForm/SearchForm";
import WeatherDisplay from "./WeatherDisplay/WeatherDisplay";


const WeatherContent = () => {
    const [city, setCity] = useState(["Gyumri", "Erevan", "Armavir", "Artik", "Ejmiatsin"])
    const [current, setCurrent] = useState('Erevan')
    const [url, setUrl] = useState('')
    const [searchHandler,setSearchHandler] = useState(false)
    const weatherData = useSelector(state => state.getActualWeather)
    const dispatch = useDispatch()
    useEffect(() => {
        current && dispatch(fetchWeatherData(current))
    }, [current, dispatch])
    useEffect(() => {
        weatherData.weather && setUrl(`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
    }, [weatherData])



    const calcWeather = () => {
        if (weatherData.main.temp < 0) {
            return <span>{Math.round(weatherData.main.temp)}</span>
        } else {
            return <span>+{Math.round(weatherData.main.temp)}</span>
        }
    }
    const calcWeatherFeels = () => {
        if (weatherData.main.temp < 0) {
            return <span>{Math.round(weatherData.main.feels_like)}</span>
        } else {
            return <span>+{Math.round(weatherData.main.feels_like)}</span>
        }
    }
    const onButtonClick = (e) => {
        setCurrent(e.target.value)
        setSearchHandler(false)
    }


    return (
        <div>
            <div className={styles.weatherBox__wrapper}>
                <ButtonContent setSearchHandler={setSearchHandler} city={city} onButtonClick={onButtonClick}/>
                {searchHandler && <SearchForm/>}
                <WeatherDisplay url={url} calcWeather={calcWeather} calcWeatherFeels={calcWeatherFeels}
                                weatherData={weatherData}/>
            </div>
        </div>
    );
};

export default WeatherContent;
