import db from "../config/db.js";

export const getAllVerbs = (result) => {  
    db.query("SELECT * FROM formsverbs", (err, results)=>{
    if(err) {
      console.log(err);
      result(err, null);
  } else {
      result(null, results);
  }
  })
}