//引入database.js
// const db = require('./libs/database');
// const http = require('./libs/http');
// const {addRouter} = require('./libs/router');
// //查询列表 将数据库数据返给前端
// addRouter('get','/list',async (get,post,files,res)=>{
//     try{
//         let data =await db.query('SELECT * FROM example_table');
//         res.writeJson({'error':0,data:data})
//     }catch(e){
//         res.writeJson({'error':1,'msg':'数据库有错误'});
//     }
//     res.end();
// });
// //新加数据 向数据库新添加一条数据
// // addRouter('get','/add',async (get,post,files,res)=>{
// //     let {title,price,num} = get;
// //     if(!title || !price || !num){
// //         res.writeJson({error:1,msg:'请求参数有误'})
// //     }else{
// //         num = Number(num);
// //         if(isNaN(num)){
// //             res.writeJson({error:1,msg:'请求参数有误'});
// //             res.end();
// //         }
// //     }
// //     try{
// //         let data =await db.query(`INSERT INTO example_table (title,price,num) VALUES ('${title}','${price}','${num}')`);
// //         res.writeJson({'error':0,msg:'success'});
// //     }catch(e){
// //         res.writeJson({'error':1,'msg':'数据库有错误'});
// //         res.end();
// //     }
// //     res.end();
// // });

// addRouter('post','/add',async (get,post,files,res)=>{
//     let {title,price,num} = post;
//     console.log({title,price,num});
//     if(!title || !price || !num){
//         res.writeJson({error:1,msg:'请求参数有误a'});
//         res.end();
//     }else{
//         num = Number(num);
//         if(isNaN(num)){
//             res.writeJson({error:1,msg:'请求参数有误不是数字'});
//             res.end();
//         }
//     }
//     try{
//         let data =await db.query(`INSERT INTO example_table (title,price,num) VALUES ('${title}','${price}','${num}')`);
//         res.writeJson({'error':0,msg:'success'});
//     }catch(e){
//         res.writeJson({'error':1,'msg':'数据库有错误'});
//         res.end();
//     }
//     res.end();
// });

// addRouter('post','/del',async (get,post,files,res)=>{
//     console.log(post);
//     let onename = post.oneName;
//     console.log(onename);
//     try{
//         let dataone =await db.query(`SELECT id FROM example_table WHERE title = '${onename}'`);
//         console.log(dataone[0].id);
//         let data = await db.query(`DELETE FROM example_table WHERE id = '${dataone[0].id}'`);
//         res.writeJson({'error':0,data:data})
//     }catch(e){
//         res.writeJson({'error':1,'msg':'数据库有错误'});
//     }
//     res.end();
// });


//为了使代码更整洁条理清晰 对以上代码进行结构上的优化处理
//主程序文件
// const db = require('./libs/database');此处不必在此处再引用
const http = require('./libs/http');
// const {addRouter} = require('./libs/router');此处不必在引用
const routers = require('./routers');
