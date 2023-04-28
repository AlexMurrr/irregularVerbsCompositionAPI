import {getRendUser} from "../models/userModel.js"

export const getUser = (req, res)=>{
    getRendUser((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    })    
}