import React from 'react'

export default function Dashboard(props) {
    return (
        <div>
            <div>
                {/* <button onClick={props.test}>Print user input</button> */}
            </div>
            <div className='flex justify-center items-center mt-10 mx-auto h-20 w-3/4 bg-gray-400 rounded-2xl'>
                <form onSubmit={props.submitLocation} autoComplete='off'>
                    <label htmlFor="location-search" placeholder='city, state, country'>Enter Location:</label>
                    <input type="text" id='location-search' onChange={props.handleChange} className='border-2 border-black'/>
                </form>
            </div>
            <div className='flex flex-col justify-center items-center mt-5 mx-auto p-5 bg-gray-500 w-3/4 rounded-2xl'>
                <p>Location: {!props.locationName ? '~' : props.locationName} </p>
                <p>Description: {!props.locationInfo.description ? '~' : props.locationInfo.description} </p>
                <p>Temp: {!props.locationInfo.temp ? 0 : props.locationInfo.temp} </p>
                <p>Feels like:{!props.locationInfo.feelsLike ? 0 : props.locationInfo.feelsLike} </p>
                <p>High: {!props.locationInfo.high ? 0 : props.locationInfo.high} </p>
                <p>Low: {!props.locationInfo.low ? 0 : props.locationInfo.low} </p>
                <p>Wind Speed:{!props.locationInfo.windSpeed ? 0 : props.locationInfo.windSpeed} </p>
            </div>
        </div>
    )
}