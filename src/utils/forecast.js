const request = require('request')

const forecast = (city, callback) => {    
    const url = 'http://api.weatherstack.com/current?access_key=f99cbfe302a3c5aa8bd8c249dcc01668&query='+city

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                location: body.location.name,
                temperature: body.current.temperature,
                observationTime: body.current.observation_time,
                humidity: body.current.humidity
            }         
            )}
    })
}

module.exports = forecast