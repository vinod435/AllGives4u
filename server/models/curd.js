const Util=require('./util')

const curd={
    create:(Table,Columns)=>{
        var F_Columns=Util.ArrayToString(Columns)
        var sql=`CREATE TABLE ${Table}(${F_Columns})`
        return(sql)
    },

    insert:(Table,Columns,Row)=>{
        var F_Columns=Util.ArrayToString(Columns)
        var Values = Util.ArrayToStringWithEnclose(Row)
        var sql = `INSERT INTO ${Table}(${F_Columns}) VALUES (${Values})`
        return(sql)},
    update:(Table,Columns,Row,condition)=>{
        var F_Columns=Util.ArrayToStringWithEqualQuestion(Columns)
        var F_condition=Util.ArrayToStringWithEqualQuestion(condition)
        var sql = `UPDATE ${Table} SET ${F_Columns} where ${F_condition}`
        return(sql)
    },
    select:(Table,condition,whereCondition)=>{
        var sql=''
    if(condition){
         sql=`SELECT * FROM ${Table} where ${whereCondition}`
         console.log(sql,'res')
        return sql
    }
    else{
         sql=`SELECT * FROM ${Table}`
        return sql
    }
        
    }
    
}
module.exports=curd