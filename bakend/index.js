import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import db from "./config/db.js";

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

app.use(express.json());

app.use(cors());

app.use(router);

app.get('/eee', (req, res) => {
       res.send('EEEE');
   })

app.get("/setPoint", (req, res, next) => {
  const update = "UPDATE mypoint SET point= 3 where id=1";
  db.query(update, 3);
});

app.listen(5001, () => console.log("Server running at http://localhost:5001"));
