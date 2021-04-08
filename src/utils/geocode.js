const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia3JyZWVzaCIsImEiOiJja24xcGZscmIwYmQyMm9tcmJlbDZrdGZtIn0.4M-6pl9zDKSLk5K4gg0CMw&limit=1'
    
    // request({ url: url, json: true }, (error, response) => {
    //     console.log('URL is',url)
        
    //     // console.log("Latitude :", latitude);
    //     // console.log("Longitude :", longitude);
    //     // console.log("Location :", location);
    //     if (error) {
    //         callback('Unable to connect to location services!', undefined)
    //     } else if (response.body.features.length === 0) {
    //         callback('Unable to find location. Try another search.', undefined)
    //     } else {
    //         callback(undefined, {
    //             latitude: response.body.features[0].center[1],
    //             longitude: response.body.features[0].center[0],
    //             location: response.body.features[0].place_name
    //         })
    //     }
    // })
    request({ url: url, json: true }, function (error, { body }) {
        
        if (error) {
            callback('Unable to connect to Geocode API', undefined);
        } 
        else if (body.features.length == 0) {
            callback('Unable to find location. Try to '
                     + 'search another location.');
        } 
        else {
            
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
 }
//var address='indore'

module.exports = geocode