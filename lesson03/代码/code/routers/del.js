//删除数据
const db = require('../libs/database');
module.exports = async (get,post,files,res)=>{
    console.log(post);
    let itemid = post.id;
    console.log(itemid);
    try{
        let data = await db.query(`DELETE FROM example_table WHERE id = '${itemid}'`);
        res.writeJson({'error':0,data:data})
    }catch(e){
        res.writeJson({'error':1,'msg':'数据库有错误'});
    }
    res.end();
}