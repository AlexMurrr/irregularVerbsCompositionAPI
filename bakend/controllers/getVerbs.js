import {getAllVerbs} from "../models/verbs";

export const getVerbs = (req, res)=>{
    getAllVerbs((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    })    
}