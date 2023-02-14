import {inserttUser} from "../models/pointmodels"

export const createuser = (req, res)=>{
    inserttUser((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    })    
}