import React, {useState} from 'react';
import styles from "../WeatherBox.module.css"
import {useDispatch} from "react-redux";
import {fetchWeatherData} from "../../../redux/actions/getActualWeather__action";
const SearchForm = () => {
    const [searchValue,setSearchValue] = useState("")
    const dispatch = useDispatch()

    const onSubmitFunc = (e) => {
        e.preventDefault()
        dispatch(fetchWeatherData(searchValue))
    }
    return (
        <div className={styles.searchForm}>
            <form onSubmit={onSubmitFunc}>
                <input type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="Type City or Country"/>
                <button className={styles.searchButton} type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchForm;
