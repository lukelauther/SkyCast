import React from 'react'

export default function Dashboard(props) {
    return (
        <div>
            <div>
                <button className='border-2 border-black' onClick={props.test}>Print Location</button>
            </div>
            <label htmlFor="location-search">Enter Location:</label>
            <input type="text" id='location-search' onChange={props.handleChange} className='border-2 border-black'/>

            <div>
                <p>Location: </p>
                <p>Description: </p>
                <p>Temp: </p>
                <p>Feels like: </p>
                <p>High: </p>
                <p>Low: </p>
                <p>Wind Speed: </p>
            </div>
        </div>
    )
}