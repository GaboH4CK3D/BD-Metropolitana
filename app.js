import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv"

import { test_reme } from "./Backend/Controllers/remediales.controller.js"
import { test_apro } from "./Backend/Controllers/aprobados.controller.js"
import { test_rep } from "./Backend/Controllers/reprobados.controller.js"

dotenv.config();

mongoose.connect(process.env.url_bd)

    .then(() => {
        console.log("App si")
    })
    .catch((err) => {
        console.log("App no")
    })
const app = express();
app.use(cors());

app.listen(4000, () => {
    console.log('Si escucha')
})

test_reme()
test_apro()
test_rep()