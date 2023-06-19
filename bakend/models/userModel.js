import db from "../config/db.js";

export const getRendUser = (result) => {
  db.query(
    "SELECT name FROM point.count ORDER BY rand() LIMIT 1",
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
