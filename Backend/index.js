const express = require("express");
const databaseConnection = require("./mongodb");
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/contact-form', async (req, resp) => {
    
    const { Name, phone, email, subject, message } = req.body;

    const db = await databaseConnection();
    const result = await db.insertOne({ Name, phone, email, subject, message });
    if(result.acknowledged){
        console.log("Data uploaded");
    }
});

app.listen(3000);

