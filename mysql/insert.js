var mysql= require('mysql');

var connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: 'baaykdazyg',
	  database: 'test'
});
connection.connect();

var articles = {
	author : 'Alex Booker',
	title: 'Node tutorial',
	body: 'kfdsfjdsfh ddsfsf'
	
};

var query= connection.query('insert into articles set ?', articles, function(err, result){
	if (err){
		console.error(err);
		return;
	}
	console.error(result);
});




