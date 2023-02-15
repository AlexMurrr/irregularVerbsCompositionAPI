import {insertUser, getUsers} from "../models/pointmodels.js"

export const createuser = (req, res)=>{
    insertUser((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    })    
}

export const showUsers = (req, res) => {
    getUsers((err, results) => {
        if(err){
            res.send(err)
        }
        else{
            res.json(results);
        }
    })
}