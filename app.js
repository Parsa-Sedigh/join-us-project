const faker = require('faker');
const mysql = require('mysql');

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password:'',
   database: 'join-us-app'
});

const query = 'SELECT CURTIME() as time';

/* When the query database is finished, run that callback function.
* When you use connection.query() you opened the connection, so after query you must close the connection too.
* The actual results of querying DB store in results (second arg of callback) parameter of callback.
* When use aliases for sql queries, the results of querying the DB will a array that the first element of array is the results
* which is an object and we can access the values by using those aliases names. TODO Till 15th video*/
connection.query(query, (error, results, fields) => {
    if (error) {
        throw error;
    }
    console.log(results[0].time);
    console.log('\n');
    console.log(fields);
});

connection.end();

/* When we are inserting 500 fake users, we don't want them all to have the exact same time that they are joining us!!! So
* we generate those past dates with faker PAST dates. */
