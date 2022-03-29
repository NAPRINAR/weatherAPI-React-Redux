import {createStore,applyMiddleware,combineReducers,compose} from "redux";
import {getActualWeather} from "./reducers/getActualWeather___reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    getActualWeather,
})

const composEnhisers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

export const store = createStore(reducers,composEnhisers(applyMiddleware(thunk)))