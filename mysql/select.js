var mysql= require('mysql');

var connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: 'baaykdazyg',
	  database: 'test'
});
connection.connect();

var id='1';

connection.query('select * from articles where id= '+connection.escape(id), function(err, result){
	console.error(result);
});





