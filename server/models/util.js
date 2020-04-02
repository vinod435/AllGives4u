const util={
    ArrayToString:(data)=>data.toString(),
    ArrayToStringWithEnclose:(Row)=>Row.map(d => `'${d}'`).join(','),
    ArrayToStringWithEqualQuestion:(Row)=>Row.map(d => `${d}=?`).join(',')
}
module.exports=util;