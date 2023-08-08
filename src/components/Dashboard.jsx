import React from 'react'

export default function Dashboard(props) {

    const days = []

    for(let key in props.locationInfo.forecast) {
        days.push(
            <div key={key} className='flex justify-end items-center'>
                <p>{props.locationInfo.forecast[key].date}</p>
                <p>{props.locationInfo.forecast[key].max} / {props.locationInfo.forecast[key].min}</p>
                <p>{props.locationInfo.forecast[key].description}</p>
            </div>
        )
    }

    return (
        <div>

            <div className='flex justify-center items-center mt-10 mx-auto h-20 w-3/5 bg-gray-400 rounded-2xl'>
                <form onSubmit={props.submitLocation} autoComplete='off'>
                    <label htmlFor="location-search" placeholder='city, state, country' className='text-lg'>Enter Location:</label>
                    <input type="text" id='location-search' onChange={props.handleChange} className='ml-2 h-8 w-72 rounded-2xl border-transparent indent-4 focus:outline-none'/>
                </form>
            </div>

            <div className='mt-5 mx-auto p-5 bg-gray-500 w-3/5 rounded-2xl'>
                <p className='flex justify-center items-center pl-8 text-2xl'>{!props.locationName ? '~' : props.locationName} </p>

                <div className='flex flex-row justify-start items-center ml-10'>
                    <div>
                        <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='h-40 w-40' />
                    </div>
                    <div>
                        <p className='text-2xl'>{!props.locationInfo.temp ? 0 : Math.round(props.locationInfo.temp)} °F</p>
                        <p className='mb-4 mt-2 flex justify-start text-lg'>{!props.locationInfo.description ? '~' : props.locationInfo.description} </p>
                    </div>

                    <div className='flex flex-col justify-center items-end'>
                        {days}
                    </div>
                    
                </div>
                
                <div className='flex flex-row justify-start items-center gap-10 ml-10'>
                    <div>
                        <p className='text-lg'>Feels like: {!props.locationInfo.feelsLike ? 0 : Math.round(props.locationInfo.feelsLike)} °F</p>
                        <p className='mt-4 text-lg'>Winds: {!props.locationInfo.windSpeed ? 0 : Math.round(props.locationInfo.windSpeed)} MPH</p>
                    </div>
                    <div>
                        <p className='text-lg'>High: {!props.locationInfo.high ? 0 : Math.round(props.locationInfo.high)} °F</p>
                        <p className='mt-4 text-lg'>Low: {!props.locationInfo.low ? 0 : Math.round(props.locationInfo.low)} °F</p>
                    </div> 
                </div> 

            </div>
            
        </div>
    )
}