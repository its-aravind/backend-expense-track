const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose=require('mongoose')

const userRouter = require('./router/userRouter')
const expenseRouter = require('./router/expenseRouter')
const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth',userRouter)
app.use('/expenses',expenseRouter)

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://thanush:thanush@expensetrack.nftzdvt.mongodb.net/?retryWrites=true&w=majority&appName=expensetrack')
const db=mongoose.connection;

db.on('open',()=>{
    console.log('connected')
})

db.on('error',()=>{
    console.log('not connected')
})



const port = 4000 || process.env.PORT_NO ;
app.listen(port , ()=>{
        console.log(`Server on :- ${port}`);
})