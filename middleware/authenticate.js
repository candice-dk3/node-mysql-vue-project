import {compare} from 'bcrypt';
import { getUserDb } from '../model/userDB.js';
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()


const checkUser = async(req,res,next)=>{
    const {username,password} = req.body;
    let hashedPassword = (await getUserDb(username)).password
    
    
    let result = await compare(password,hashedPassword)
        if(result==true){
            let token = jwt.sign({username:username},process.env.SECRET_KEY,{expiresIn:'1h'})
            req.body.token = token
            console.log(token);
            
            next()
        }else{
        res.send('Password incorrect')
        }
    }


export {checkUser}