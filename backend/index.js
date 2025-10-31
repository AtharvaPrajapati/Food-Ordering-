const express = require('express');
const dbconnection = require('./config/database');
 const router=require('./routes/router')
const cors=requrie('cors')

const app = express();

dbconnection();

const cookieParser=require('cookie-parser')


app.use(cookieParser())

require('dotenv').config();


const PORT = process.env.PORT || 4000;





app.use(cors({
    origin:'https://localhost:3000',
    crendetails:true,
}))


app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});   

app.use("api/v1",router);