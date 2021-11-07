import { Request, Response } from 'express';
// const fetch = (url:string) => import('node-fetch').then(({default: fetch}) => fetch(url));
import axios from "axios"
require('dotenv').config()


async function news(req:Request, res:Response){
    // console.log(process.env.WEATHER_KEY)

    if (!process.env.NEWS_KEY){
        res.status(400).send({
            message: "Enviroment Variable \"NEWS_KEY\" do not exists."
        })
    }
    // console.log("Hello")

    try {
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&language=en&apiKey=${process.env.NEWS_KEY}`);
        // console.log(weather)
        res.status(200).send(news.data);
    }
    catch (error){
        res.status(400).send({
            "message":"could not fetch news api",
            error
        });
    }

    // const weather = response.json()
}

export { news };