var weather = require('weather-js');
var fs = require('fs');
var userSearch = require('./userSearch');


function WeatherAdmin(){
    
    this.getWeather = function(){
        fs.readFile('log.txt','utf-8', function read(err, data) {
            console.log(data);  
        });
               
    }

    this.newUserSearch = function(name, location){
        var aNewUserSearch = new userSearch(name,location);
        var logTxt = "\nname: " + aNewUserSearch.name +
        "location: " + aNewUserSearch.location + "Date: "+aNewUserSearch.date;
        fs.appendFile('log.txt',logTxt);
                  
           aNewUserSearch.getWeather();
    }     
}
module.exports = WeatherAdmin;