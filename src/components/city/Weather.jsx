import React from 'react'

const Weather = () => {
    return (
        <div className="weather">
        <span className="title">Weather App</span>
        <br />
        <form>
          <input
            type="text"
            placeholder="city"
            name="city"
            onChange={(e) => handleChange(e)}
          />
          <button className="getweather" onClick={(e) => weatherData(e)}>
            Submit
          </button>
        </form>
      </div>
    )
}

export default Weather;
