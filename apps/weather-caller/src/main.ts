import axios from 'axios';
import express from 'express';
import  {stringify} from 'qs'
const app = express();
app.use(express.json());

const DAPR_HOST = process.env.DAPR_HOST || "http://localhost";
const DAPR_HTTP_PORT = process.env.DAPR_HTTP_PORT || "3500";
const APP_PORT = process.env.WEATHER_CALLER_PORT || "3000" 
const axiosConfig = {
  headers: {
      "dapr-app-id": "weather-api"
  }
};
app.get('/',async (req, res) => {
 try {
  
   const params = {
     longitude: req.query['longitude'],
     latitude: req.query['latitude'],
   };
   console.log(params)
   console.log(`${DAPR_HOST}:${DAPR_HTTP_PORT}/api/weather?${stringify(params)}`,req.query)
   const  result = await axios.get(`${DAPR_HOST}:${DAPR_HTTP_PORT}/api/weather?${stringify(params)}`, axiosConfig);
   console.log(result.data)
   res.send(result.data);
 } catch (error) {
  res.status(500).send({error:error.message || error})
 }
});

app.listen(APP_PORT, () => {
  console.log(`[ ready ] http://localhost:${APP_PORT}`);
});
