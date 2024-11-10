import Card from '@mui/material/Card';
import "./Infobox.css"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function Infobox () {
    let info = {
        city : "Mumbai" ,
        feelslike : 30.71,
        humidity : 41,
        temp : 30.62,
        tempMax : 30.62,
        tempMin : 30.62,
        weather : "haze"
    }
    return (
        <div className="Infobox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/18/misty-plank.JPG?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <div>Temperature = { info.temp}</div>
        <div>Humidity = {info.humidity}</div>
        <p>Min temp = {info.tempMin}</p>
        <p>Max temp = { info.tempMax}</p>
        <p>The weather feels like { info.feelslike}&deg;c</p>
        </Typography>
      </CardContent>
     
    </Card>
        </div>
    )
}