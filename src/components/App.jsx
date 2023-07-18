import React, { useState } from 'react'
import Dashboard from './Dashboard'

export default function App() {

    const [location, setLocation] = useState('')

    const handleChange = (e) => {
        setLocation(e.target.value)
    }

    // const submitLocation = () => {
    //     fetch('/api/', {
    //         method: 'POST',  
    //         body: JSON.stringify({ userLocation: location }),
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('data from api call: ' + data)
    //     })
    //     .catch(error => console.log('error when receiving api data, ' + error))
    // }

    return (
        <div>
            <Dashboard handleChange={handleChange} />
        </div>
    )
}