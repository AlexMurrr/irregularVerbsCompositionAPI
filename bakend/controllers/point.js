import {insertUser} from "../models/pointmodels"

export const createuser = (req, res)=>{
    insertUser((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    })    
}