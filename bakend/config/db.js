import mysql from 'mysql2';

  const connection = mysql.createConnection({
     host     : 'localhost',
     user     : 'root',
     password : 'AAAAAAA',
     database : 'timeprogramming'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});
