var weather = require('weather-js');


function userSearch(name,location,date){
    this.name = name;
    this.location = location;
    this.date = Date.now();
    
    this.getWeather = function(){


weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);
   
    console.log(JSON.stringify(result, null, 2));
  });
};

};

module.exports = userSearch;
