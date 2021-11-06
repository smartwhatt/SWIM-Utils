import express from "express";
import os from "os";

import { rhetorical } from "./routes";

const app = express()


const PORT = process.env.PORT || 8080;

app.get("/rhetorical", rhetorical)

app.listen( 
    PORT, () => console.log(`Listening of http://${os.hostname()}:${PORT}`)
)