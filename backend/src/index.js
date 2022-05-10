const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const courseRoute = require('../routes/course');
var cors = require('cors');

dotenv.config();
app.use(cors())

mongoose
    .connect("mongodb+srv://user-123:pass123@mini-merm-tut.or0e1.mongodb.net/final_devtool?retryWrites=true&w=majority")
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    })

app.use(express.json());
app.use(courseRoute.router);

app.listen(process.env.PORT || 3001, () => {
    console.log("Backend server is running! on port 3001")
});

export default app