const mysql=require('mysql');
const dbInfo={
  host: '127.0.0.1',
  user: 'vinod',
  password: 'admin123',
  database: 'allgives'
}
const connection=mysql.createConnection(dbInfo)
connection.connect(function(err){
    if (err) throw err
  console.log('You are now connected...')
})
module.exports=connection;