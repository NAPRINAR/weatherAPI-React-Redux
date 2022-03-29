export const CONSTANTS = {
    GET__WEATHER:"GET__WEATHER"
}

const initialState = {

}

export const getActualWeather = (state=initialState,action) => {
    switch(action.type){
        case CONSTANTS.GET__WEATHER:
            return{...state,...action.payload.weatherData}


        default:
            return state
    }
}