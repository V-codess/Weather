import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faBolt, faCloudRain, faSmog, faSnowman, faSun } from '@fortawesome/free-solid-svg-icons';
import Grid from '@mui/material/Grid';

export default function WeCard({temp, city, sky, sunset, sunrise, humidity}) {
  let icons = null;
  if(sky === "Clouds"){
    icons =<FontAwesomeIcon icon={faCloudSun} size="lg" />
  }
  else if(sky === "Thunderstorm"){
    icons =<FontAwesomeIcon icon={faBolt} size="lg" />
  }
  else if(sky === "Snow"){
    icons =<FontAwesomeIcon icon={faSnowman} size="lg" />
  }
  else if(sky === "Rain"){
    icons =<FontAwesomeIcon icon={faCloudRain} size="lg" />
  }
  else if(sky === "Mist"){
    icons =<FontAwesomeIcon icon={faSmog} size="lg" />
  }
  else if(sky === "Clear"){
    icons =<FontAwesomeIcon icon={faSun} size="lg" />
  }  
  let time = moment().format('MMMM Do, h:mm a');
  return (
    <Grid
  container
  direction="column"
  alignItems="center"
  justify="center"
  rowSpacing={1}
 >
  <Grid item lg={12}></Grid>
    <Card className="card" sx={{maxWidth:"1000px"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h3>City: {city}</h3>   
        <h5>{time}</h5> </Typography>
        <h4>{icons}</h4>
        <div className="weather">
        <div className="weathercard">
         <p>Temperature: {Math.floor(temp)}℃</p>
         <p>Humidity: {humidity}%</p>
        </div>
        <div className="weathercard">
        <p>Sunrise: {new Date(sunrise*1000).toLocaleTimeString()}</p>
        <p>Sunset: {new Date(sunset*1000).toLocaleTimeString()}</p> 
        
       </div>
          </div>
      </CardContent>
      <CardActions> 
          </CardActions>
    </Card>
    </Grid>      
      );
  }