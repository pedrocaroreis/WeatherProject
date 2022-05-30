const express = require("express");
const https =require("https");

const app = express();

app.get("/", function (res, res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Brasilia,br&appid=???????????????&units=metric";

  https.get(url, function (response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const urlIcon = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather in Brasilia is " + weatherDescription + ".</p>");
      res.write("<h1>The temperature in Brasilia right now is " + temp + " Celsius degrees.</h1>");
      res.write("<img src=" + urlIcon + ">");
      res.send();
    })
  })
})





app.listen(3000, function (){
  console.log("Server is running on port 3000.");
})
