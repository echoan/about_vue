//添加一条数据
const db = require('../libs/database');
module.exports = async (get,post,files,res)=>{
    let {title,price,num} = post;
    console.log({title,price,num});
    if(!title || !price || !num){
        res.writeJson({error:1,msg:'请求参数有误a'});
        res.end();
    }else{
        num = Number(num);
        if(isNaN(num)){
            res.writeJson({error:1,msg:'请求参数有误不是数字'});
            res.end();
        }
    }
    try{
        // let data =await db.query(`INSERT INTO example_table (title,price,num) VALUES ('${title}','${price}','${num}')`);
        //为避免数据库招到注入式攻击一般会将以上语句写成如下形式
        let data =await db.query(`INSERT INTO example_table (title,price,num) VALUES (?,?,?)`,[title,price,num]);
        res.writeJson({'error':0,msg:'success'});
    }catch(e){
        res.writeJson({'error':1,'msg':'数据库有错误'});
        res.end();
    }
    res.end();
}