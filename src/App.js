import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect, useState } from "react"
const axios = require('axios');
const apikey = "b5f0a877002b1cbe70952711f643d2e5";

function App() {
  

  let obj = {
    lat: 24.9141617,
    long: 67.082216
  }
  

  const [weatherData, setWeatherData] = useState([]);


  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${obj.lat}&lon=${obj.long}&exclude={daily}&appid=${apikey}&units=metric`)
      .then((response) => {
        console.log("response", response.data.daily);

        setWeatherData(response.data.daily);


      }).catch(e => {
        console.log("error: ", e);

        setWeatherData({
          name: "karachi",
          main: {
            temp_max: 25,
            temp_min: 10,
            temp: 15,
          }
        });

      })
  }, [])
  
  return (
    
    
    <div>
     {  
     
      
     (weatherData && weatherData.length > 0)
     ?
     (
      weatherData.map((item,index)=>{
          return(
            
            <div  key={index}>
              
              
               
              
              <h1 class="def">
              Temperature : {item.temp.day}<br/>
               Min :  {item.temp.min} <br/>
              Max : {item.temp.max}
              </h1>
            </div>
          )
      })
       )
     :
     (<h1>data not found</h1>)
     } 
    </div>
  );
}
 

export default App;