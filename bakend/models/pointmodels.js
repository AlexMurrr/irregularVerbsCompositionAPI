import db from "../config/db.js";
import express from "express"

const app = express();
app.listen(5000, () => {
    console.log("Server is listening on port ")
})

app.get('/', (req, res) => {
    res.send('EEEE');
})

app.get("/add", (req, res, next) => {
    const insert =
    "INSERT INTO point.count (`name`, `countPoint`) VALUES (?, ?);";
    db.query(insert, ['E', 100],  (err, res)=>{
             if(err) console.log(err.message);
             console.log('Add successfull')   
  })
})

export const insertUser = (result) =>{
  db.query("INSERT INTO point.count (`name`, `countPoint`) VALUES (?, ?)",['E', 100],     (err, results)=>{
    if(err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
  })      
}