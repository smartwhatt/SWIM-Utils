import express from "express";
import os from "os";

import { rhetorical, weather } from "./routes";

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8080;

app.get("/", (req,res) => {
    res.status(200).send({
        "rhetorical":"/rhetorical?q=<query>"
    })
})

app.get("/rhetorical", rhetorical)

app.get("/weather", weather)


app.listen( 
    PORT, () => console.log(`Listening of http://${os.hostname()}:${PORT}`)
)