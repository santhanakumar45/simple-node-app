const dotenv = require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser")
const app = express();

const port = 3000; // Change this to 3000
const cors = require("cors")

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())


app.get("/", (req, res) => {
    res.status(200).json({ message: "Hii Node Application is running" });
});

app.get("/sample", (req, res) => {
    const displayData = "hello world";
    res.status(200).json({ message: displayData });
});




app.listen(port, () => console.log(`Server is running on port ${port}`));
