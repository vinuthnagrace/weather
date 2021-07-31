import { useEffect, useState } from "react";
import React from 'react'

const City = () => {

const [city, setCity] = useState(null);
const [search, setSearch] = useState("Mumbai");

useEffect( () => {
    const fetchApi = async () => {
        const url =  'https:api.openweathermap.org/data/2.5/weather?q=${search}&appid=d23d138ee0ad3a8023b1505679023c77'
           }
})

    return (
        <div>
            
        </div>
    )
}

export default City
