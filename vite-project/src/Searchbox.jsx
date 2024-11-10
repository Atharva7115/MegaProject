import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css"
import { useState } from 'react';
export default function Searchbox () {
    let [ city ,setcity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "0dc4ab67d8911a4ca41f4ba000c3e4c1";
    let getWeather = async () => {
    let respose = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let jsonResponse = await respose.json()
    console.log(jsonResponse);
let result = {
    city : city ,
    temp : jsonResponse.main.temp,
    tempMin :  jsonResponse.main.temp_min,
    tempMax :  jsonResponse.main.temp_max,
    humidity :  jsonResponse.main.humidity ,
    feelslike :  jsonResponse.main.feels_like,
    weather :  jsonResponse.weather[0].description
}
console.log(result);

        }
        let handleChange = (event) => {
            setcity(event.target.value)
        }
        let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setcity("");
        getWeather()
     }
        return (
       <div className='Searchbox'>
        <h3>Search for weather</h3>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City name" value={city} onChange={handleChange} variant="outlined" required />
        <br /><br />
        <Button variant="contained" type= "submit">Search</Button>
        </form>
         
        </div>
       
    )
}