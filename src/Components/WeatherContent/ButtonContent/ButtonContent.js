import React from 'react';
import styles from "../WeatherBox.module.css";

const ButtonContent = ({city,onButtonClick,setSearchHandler}) => {
    return (
        <div>
            <div className={styles.weather__select}>
                {city && city.map(el => {
                    return <button  key={Math.random()} className={styles.countryButton} value={el} onClick={onButtonClick}>{el}</button>
                })}
                <button onClick={() => setSearchHandler(true)} className={styles.countryButton}>Search other</button>
            </div>
        </div>
    );
};

export default ButtonContent;
