const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const authRouter = require('./routes/auth/auth-routes');

mongoose.connect('mongodb+srv://lavish637728:lavish637728@sachinecom.uragf.mongodb.net/').then(()=>
    console.log("connected to database")).catch(error =>(console.log(error))
);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin:' http://localhost:5173',
        methods:['GET ','POST', 'DELETE' , 'PUT'],
        allowedHeaders:[
            "Content-type",
            "Authrization",
            "Cache-Control",
            'Expires',
            'Pragma'
        ],
        credentials: true,
    })
);


app.use(cookieParser());
app.use(express.json());
app.use('/api/auth' , authRouter);
app.listen(PORT , ()=>console.log(`server is running on ${PORT}`))