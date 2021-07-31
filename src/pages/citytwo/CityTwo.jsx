import { useEffect, useState } from "react";
import React from 'react'
import "../cityone/one.scss"
import Component from "../../components/Component";

const CityTwo = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=tanuku&appid=d23d138ee0ad3a8023b1505679023c77"
      )
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    });
    return (
        <div>
        {data.map((data) => (
          <h3>
            <Component temp={data.temp} tempmin={data.tempmin} tempmax={data.tempmax} pressure={data.pressure} humidity={data.humidity} country={data.country} name={data.name} />
          </h3>
        ))}
      </div>
    )
}

export default CityTwo;