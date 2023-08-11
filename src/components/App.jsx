import React, { useState } from 'react'
import Dashboard from './Dashboard'

export default function App() {

    const [location, setLocation] = useState('')

    const [locationInfo, setLocationInfo] = useState({})

    const test = () => {
        console.log(locationName)
    }

    const handleChange = (e) => {
        setLocation(e.target.value)
    }

    const submitLocation = (e) => {
        e.preventDefault()
        // console.log(`Location submitted: ${location}`)
        fetch('/api/', {
            method: 'POST',  
            body: JSON.stringify({ userLocation: location }),
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
                icon: data.icon,
                forecast: data.forecast,
            })
            // console.log('data from api call: ', data)
        })
        .catch(error => console.log('error when receiving api data, ' + error))
    }

    return (
        <div>
            <Dashboard handleChange={handleChange} submitLocation={submitLocation} locationInfo={locationInfo} locationName={location} test={test}/>
        </div>
    )
}