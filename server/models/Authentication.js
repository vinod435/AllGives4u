const db=require('../dbConnection');
const curd=require('./curd')
const Authentication={
    
signUp:(data,callback)=>{
    const Table='USERS';
    const Columns=['User_FirstName','User_LastName','User_Email','User_PhoneNo','User_Password'];
    const Row=[data.u_FirstName,data.u_LastName,data.u_Email,data.u_PhoneNo,data.u_Password];
    const condition=true;
    const whereCondition=`User_Email='${data.u_Email}'`
    db.query(curd.select(Table,condition,whereCondition),(S_err,S_res)=>{
        if(S_res.length === 0){
            db.query(curd.insert(Table,Columns,Row),(I_err,I_res)=>{
               if(I_res){
                   I_res['error']=0
                callback(I_res)
               }
               else{
                I_res['error']=1
                callback(I_err)
               }
            })
        }
        else{
            callback({error:1})
        }
    })
},
signIn:(data,callback)=>{
    const Table='USERS';
    const condition=true;
    const whereCondition=`User_Email='${data.u_Email}'and User_Password='${data.u_Password}'`
    db.query(curd.select(Table,condition,whereCondition),(S_err,S_res)=>{
        if(S_res.length === 0){
            callback({error:1})
        }
        else if(S_res.length){
            callback({error:0})
        }
    })
}
}
module.exports=Authentication

 // const Table='USERS';
    // const Columns=['PersonID','LastName','FirstName','Address','City'];
    // const Row=['1234','kumar','vinod','hyd','city']
    // dbConnection.query(curd.insert(Table,Columns,Row))
    
    // const Table='USERS';
    // const Columns=['PersonID','LastName','FirstName','Address','City'];
    // const Row=['1234','kumar','reddy','hyd','bbb','1234'];
    // const condition=['PersonID']
    // dbConnection.query(curd.update(Table,Columns,Row,condition),Row)