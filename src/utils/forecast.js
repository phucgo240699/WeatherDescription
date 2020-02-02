const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7098acbff58b169148e43871f398b649/' + latitude + ',' + longitude
    
    //console.log(url)
    
    request({url: url, json: true}, function(error, {body}){
        if(error){
            callback('Unable to connect to weather services', undefined)
            
        }
        else if(body.error){
            callback('Unable to find weather', undefined)
        }
        else{
            //console.log(response.body.daily.data[0].summary)
            callback(undefined, {
                summary: body.daily.data[0].summary
            })
        }
    })
}

module.exports = forecast