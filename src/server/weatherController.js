const apiKey = '01b7db4cad30c396038a495ce4a70214';

const weatherController = {};

weatherController.getLocationKey = (req, res, next) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.userLocation}&appid=${apiKey}`)
        .then((info) => info.json())
        .then((data) => {
            res.locals.lon = data.coord.lon
            res.locals.lat = data.coord.lat 
            return next();
        })
        .catch((error) => console.log('Error in getLocationKey', error));
}

weatherController.getCurrentConditions = (req, res, next) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${res.locals.lat}&lon=${res.locals.lon}&appid=${apiKey}&units=imperial`)
      .then((info) => info.json())
      .then((data) => {
        // console.log('data', data)
        res.locals.description = data.weather[0].description;
        res.locals.temp = data.main.temp;
        res.locals.feelsLike = data.main.feels_like;
        res.locals.high = data.main.temp_max;
        res.locals.low = data.main.temp_min;
        res.locals.windSpeed = data.wind.speed;
        res.locals.icon = data.weather[0].icon;
        return next();
      })
      .catch((error) => console.log("Error in getCurrentConditions", error));
}

weatherController.getForecast = (req, res, next) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${res.locals.lat}&lon=${res.locals.lon}&appid=${apiKey}&units=imperial`)
      .then((info) => info.json())
      .then((data) => {
        const days = [];
        for (let i = 0; i < data.list.length; i++) {
          if (data.list[i].dt_txt.includes('12:00:00')) {
            days.push({
              date: data.list[i].dt_txt, 
              max: data.list[i].main.temp_max, 
              min: data.list[i].main.temp_min, 
              description: data.list[i].weather[0].description
            })
          }
        }
        // console.log('days', days)
        res.locals.forecast = days
        return next();
      })
      .catch((error) => console.log("Error in getForecast", error));
}

module.exports = weatherController