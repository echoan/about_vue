//封装连接数据库的模块
//引入数据库模块
const mysql = require('mysql');
//引入数据库封装模块
const co = require('co-mysql');
//引入连接数据库的相关参数
//const {DB_HOST,DB_PORT,DB_USER,DB_PASS,DB_NAME} = require('../config/index');
//引入时默认是加载config文件夹下的index.js文件（如果index文件存在的话，不存在会报错）故以上可以简写为以下这种方式
const {DB_HOST,DB_PORT,DB_USER,DB_PASS,DB_NAME} = require('../config');
// let obj = require('../config');
// console.log(obj);
//创建数据库连接池
let conone = mysql.createPool({
    host:DB_HOST,
    port:DB_PORT,
    user:DB_USER,
    password:DB_PASS,
    database:DB_NAME
});
//将该模块暴露出来以便可以对外使用
module.exports = co(conone);



