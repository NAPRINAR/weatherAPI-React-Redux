import React from 'react';
import styles from "../WeatherBox.module.css";

const WeatherDisplay = ({weatherData,calcWeatherFeels,calcWeather,url}) => {
    return (
        <div>
            <div className={styles.weatherDisplay}>
                {weatherData.weather && <div className={styles.selectedWeather}>
                    <h3 className={styles.countryHeader}>{weatherData.name}</h3>
                    <div className={styles.weatherMain}>
                        <img src={url} alt="weather-img"/>
                        {calcWeather()}
                        <span>{weatherData.weather[0].description}</span>
                    </div>
                    <div className={styles.weatherDetails}>
                        <span>Ошущается как{calcWeatherFeels()}</span>
                        <span>Ветер {weatherData.wind.speed} км/ч </span>
                        <span>Влажность {weatherData.main.humidity}%</span>
                        <span>Давление {weatherData.main.pressure} гПа</span>
                    </div>

                </div>}
            </div>
        </div>
    );
};

export default WeatherDisplay;
