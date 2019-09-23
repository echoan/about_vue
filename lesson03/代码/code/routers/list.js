//查询列表
const db = require('../libs/database');
module.exports = async (get,post,files,res)=>{
    try{
        let data =await db.query('SELECT * FROM example_table');
        res.writeJson({'error':0,data:data})
    }catch(e){
        res.writeJson({'error':1,'msg':'数据库有错误'});
    }
    res.end();
}