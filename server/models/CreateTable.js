const dbConnection=require('../dbConnection');
const curd=require('./curd')
const CreateTable={
createTable:()=>{
    const Table='USERS';
    const Columns=[
    'User_Id int(3) zerofill not null AUTO_INCREMENT PRIMARY KEY',
    'FirstName VARCHAR(255)',
    'LastName VARCHAR(255)',
    'Email VARCHAR(255)',
    'PhoneNo VARCHAR(255)',
    'Password VARCHAR(255)',
    'Created_Date DATETIME',
    'Sex VARCHAR(1)',
    'Updated_Date DATETIME',
    'Active_Ind VARCHAR(1)',
]
   dbConnection.query(curd.create(Table,Columns),(err,res)=>{
        if(res){
        }
        else if(err){
        }
        else{
        }
    })
}
}
module.exports=CreateTable