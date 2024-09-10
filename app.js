const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');
const expenseRoutes = require('./routes/expense')

const app=express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api',expenseRoutes)

app.use((req,res)=>{
    res.status(404).json({success:false, message:'Page not found'});
})

sequelize
    .sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((err) => {
        console.log(err);
    });
