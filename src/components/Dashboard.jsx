import React from 'react'

export default function Dashboard(props) {

    const days = []

    for(let key in props.locationInfo.forecast) {
        days.push(
            <div key={key} className='flex justify-center items-center gap-4 mb-4'>
                <p className='text-md font-poppins font-medium'>{!props.locationInfo.forecast[key].date ? '~' : props.locationInfo.forecast[key].date}</p>
                <p className='text-md font-poppins'>{!props.locationInfo.forecast[key].max ? '~' : Math.round(props.locationInfo.forecast[key].max)} °F / {!props.locationInfo.forecast[key].min ? '~' : Math.round(props.locationInfo.forecast[key].min)} °F</p>
                <p className='text-md font-poppins font-normal'>{!props.locationInfo.forecast[key].description ? '~' : props.locationInfo.forecast[key].description}</p>
            </div>
        )
    }

    return (
        <div>
            
            <p className='flex justify-center items-center my-6 mx-auto text-4xl font-poppins font-semibold'>SkyCast</p>

            {/* DARK MODE SWITCH, FIGURE OUT FORMATTING LATER */}
            {/* <input
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault" /> */}
            {/* <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="flexSwitchCheckDefault">Default switch checkbox input</label> */}

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
                        <p className='text-xl font-poppins font-semibold'>5 Day Forecast</p>
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