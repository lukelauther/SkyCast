import React, { useState } from 'react'
import Dashboard from './Dashboard'

export default function App() {

    const [location, setLocation] = useState('')

    const [locationInfo, setLocationInfo] = useState({})

    const handleChange = (e) => {
        setLocation(e.target.value)
    }

    const [locationName, setLocationName] = useState('')

    const submitLocation = (e) => {

        setLocationName(location)

        e.preventDefault()
        fetch('/api/', {
            method: 'POST',  
            body: JSON.stringify({ userLocation: `${location}, US` }),
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setLocationInfo({
                description: data.description,
                temp: data.temp,
                feelsLike: data.feelsLike,
                high: data.high,
                low: data.low,
                windSpeed: data.windSpeed,
                iconURL: data.iconURL,
                forecast: data.forecast,
            })
        })
        .catch(error => console.log('error when receiving api data, ' + error))
    }

    return (
        <div>
            <Dashboard handleChange={handleChange} submitLocation={submitLocation} locationInfo={locationInfo} locationName={locationName}/>
        </div>
    )
}