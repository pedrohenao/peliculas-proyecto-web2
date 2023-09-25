
const express = require("express")
const { mongoConn } = require("./db/configuration")

const dotenv =require("dotenv").config()

const cors =require ("cors");

mongoConn()
const app = express()

app.set("port",  process.env.PORT || 4000 )



app.use(cors());

//perseo

app.use(express.json());

app.use("/tipoGenero",require("../routes/tipoGenero"));
app.use("/director",require("../routes/director"));
app.use("/productora",require("../routes/productora"));
app.use("/tipo",require("../routes/tipo"));
app.use("/media",require("../routes/media"));

app.listen(app.get("port"),() => {

    console.log(`servidor arranco en puerto: ${app.get("port")}`)
})