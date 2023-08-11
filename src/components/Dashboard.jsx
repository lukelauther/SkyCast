import React from 'react'

export default function Dashboard(props) {

    const days = []

    for(let key in props.locationInfo.forecast) {
        days.push(
            <div key={key} className='flex justify-center items-center gap-4 mb-4'>
                <p className='text-sm font-poppins'>{!props.locationInfo.forecast[key].date ? '~' : props.locationInfo.forecast[key].date}</p>
                <p className='text-sm font-poppins'>{!props.locationInfo.forecast[key].max ? '~' : Math.round(props.locationInfo.forecast[key].min)} °F / {!props.locationInfo.forecast[key].min ? '~' : Math.round(props.locationInfo.forecast[key].min)} °F</p>
                <p className='text-sm font-poppins'>{!props.locationInfo.forecast[key].description ? '~' : props.locationInfo.forecast[key].description}</p>
            </div>
        )
    }

    return (
        <div>
            
            <p className='flex justify-center items-center my-6 mx-auto text-4xl font-poppins font-semibold'>SkyCast</p>

            {/* SEARCH BAR */}
            <div className='flex justify-center items-center mt-8 mx-auto h-20 w-3/5 bg-gray-200 rounded-2xl drop-shadow-lg'>
                <form onSubmit={props.submitLocation} autoComplete='off'>
                    <label htmlFor="location-search" placeholder='city, state, country' className='text-lg font-poppins'>Enter Location:</label>
                    <input type="text" id='location-search' onChange={props.handleChange} className='ml-2 h-8 w-72 rounded-2xl border-transparent indent-4 focus:outline-none'/>
                </form>
            </div>

            {/* MAIN DASHBOARD */}
            <div className='grid grid-cols-2 mt-5 mx-auto p-5 bg-gray-200 w-3/5 rounded-2xl drop-shadow-lg'>

                {/* LOCATION NAME */}
                <p className='flex col-span-2 justify-center items-center pl-8 text-2xl'>{!props.locationName ? '~' : props.locationName} </p>

                {/* LEFT SIDE OF DASHBOARD */}
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <div> 
                        <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='h-40 w-40' />
                        </div>
                        <div>
                            <p className='text-3xl font-poppins font-semibold'>{!props.locationInfo.temp ? 0 : Math.round(props.locationInfo.temp)} °F</p>
                            <p className='mb-4 mt-2 flex justify-start text-xl font-poppins font-medium'>{!props.locationInfo.description ? '~' : props.locationInfo.description} </p>
                        </div>
                    </div>
                    

                    <div className='flex flex-row justify-start items-center gap-10'>
                        <div>
                            <p className='flex gap-2 text-xl font-poppins font-medium'>Feels like: <p className='textxl font-poppins font-normal'>{!props.locationInfo.feelsLike ? 0 : Math.round(props.locationInfo.feelsLike)} °F</p></p>
                            <p className='mt-4 flex gap-2 text-xl font-poppins font-medium'>Winds: <p className='text-xl font-poppins font-normal'>{!props.locationInfo.windSpeed ? 0 : Math.round(props.locationInfo.windSpeed)} MPH</p></p>
                        </div>
                        <div>
                            <p className='flex gap-2 text-xl font-poppins font-medium'>High: <p className='text-xl font-poppins font-normal'>{!props.locationInfo.high ? 0 : Math.round(props.locationInfo.high)} °F</p></p>
                            <p className='mt-4 flex gap-2 text-xl font-poppins font-medium'>Low: <p className='text-xl font-poppins font-normal'>{!props.locationInfo.low ? 0 : Math.round(props.locationInfo.low)} °F</p></p>
                        </div> 
                    </div> 
                </div>

                {/* RIGHT SIDE OF DASHBOARD */}
                <div className='flex flex-col items-center'>
                    <div className='mt-6 mb-4'>
                        <p className='text-xl font-poppins'>5 Day Forecast</p>
                    </div>
                    <div className='flex flex-col col-span-2 justify-start items-start'>
                        {days}
                        {/* <div id='day1'></div>
                        <div id='day2'></div>
                        <div id='day3'></div>
                        <div id='day4'></div>
                        <div id='day5'></div> */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}