const express = require('express');
const { lchown } = require('fs');
const app = express();
const path = require('path');
const { resourceLimits } = require('worker_threads');
const PORT = 3000;

const weatherController = require('./weatherController')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, './index.html'));
})

app.post('/api/', weatherController.getLocationKey, weatherController.getCurrentConditions, weatherController.getForecast, (req, res) => {
    // console.log('req.body', req.body)
    // console.log('res.locals', res.locals)
    return res.status(200).json({
        description: res.locals.description,
        temp: res.locals.temp,
        feelsLike: res.locals.feelsLike,
        high: res.locals.high,
        low: res.locals.low,
        windSpeed: res.locals.windSpeed,
        icon: res.locals.icon,
        forecast: res.locals.forecast
    })
})

app.use((req, res) => res.sendStatus(404));

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

module.exports = app;