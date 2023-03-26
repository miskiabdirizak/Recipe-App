import mysql from "mysql"

var connection = 
mysql.createConnection({
    host        : 'localhost', 
    user        : 'root', 
    password    : 'miski101', 
    database    : 'recipe_app'
});
export default connection