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
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${res.locals.lat}&lon=${res.locals.lon}&appid=${apiKey}&units=imperial`
    )
      .then((info) => info.json())
      .then((data) => {
        console.log('data', data)
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

module.exports = weatherController