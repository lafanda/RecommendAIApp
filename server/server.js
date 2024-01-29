import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import path from "path";
import User from "./models/User.js"
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bcryptjs from "bcryptjs";


const pwd = process.env.MONGO_Y;
const uri = `mongodb+srv://yamenmoh250:${pwd}@cluster0.blp3ok9.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose.connect(uri).then(console.log("Connected")).catch( (err)=>console.log("error connecting to database"));


const app = express();
const port = 4000;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const saltrounds = 10;


app.post("/signUp", async (req,res)=>{

    try{
    
        const secret = process.env.B_SECRET;
        var pwdDB = secret + req.body.password;
        const hashedPWD = await bcryptjs.hash(pwdDB, saltrounds)  // hashed password to pass into database

        const curEmail = req.body.email;
        const curUserName = req.body.userName;
        
        const data = {email: curEmail, userName: curUserName, password: hashedPWD };  // emial, username, password for database
        const currentUser = new User(data);
        await currentUser.save();
        res.sendStatus(200);
    
    }

    catch(err){
        res.status(400)
        res.json(err);
    }
    
});

app.post("/logIn", async (req,res)=>{

    try{

    const userName = req.body.userName;
    const user = await User.findOne({userName: userName});
    const pwdDB = user.password;  // password from database

    const secret = process.env.B_SECRET;
    const pwdUser = secret + req.body.password;  // password on current input
    

    bcryptjs.compare(pwdUser, pwdDB, function(err, match){
        if(err){

        }
        if(match){
            console.log("match");
            res.sendStatus(200);

        }
        else{
            console.log("no match");
            res.sendStatus(401);
        }
    });
}

catch(err){
    res.status(400);
}
});



app.listen(port, ()=>{
    console.log(`Server Running On Port: ${port}`);
})