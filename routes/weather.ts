import { Request, Response } from 'express';
// const fetch = (url:string) => import('node-fetch').then(({default: fetch}) => fetch(url));
import axios from "axios"
require('dotenv').config()


interface WeatherQuery {
    lat: string;
    lon: string;
}

async function weather(req:Request, res:Response){
    const { lat, lon } = req.query as unknown as WeatherQuery;
    // console.log(process.env.WEATHER_KEY)

    if (!process.env.WEATHER_KEY){
        res.status(400).send({
            message: "Enviroment Variable \"WEATHER_KEY\" do not exists."
        })
    }

    if (!lat || !lon){
        res.status(400).send({
            message: "Params \"lon\" and \"lat\" is required."
        })
        // return
    }

    try {
        const weather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`)
        // console.log(weather)
        res.status(200).send(weather.data);
    }
    catch (error){
        res.status(400).send({
            "message":"could not fetch weather api",
            error
        });
    }

    // const weather = response.json()
}

export { weather };