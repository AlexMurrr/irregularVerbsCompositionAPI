import db from "../config/db.js";

export const getAllVerbs = (result) => {
  db.query("SELECT * FROM formsverbs", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getRandVerb = (result) => {
  db.query(
    "SELECT * FROM formverbs ORDER BY rand() LIMIT 1",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
