//开发环境配置
const path = require('path');
module.exports = {
    //配置数据库
    DB_HOST:'localhost',
    DB_PORT:3306,
    DB_USER:'root',
    DB_PASS:'123456',
    DB_NAME:'testbase',

    //配置http
    HTTP_PORT:8080,
    HTTP_ROOT:path.resolve(__dirname,'../static/'),
    HTTP_UPLOAD:path.resolve(__dirname,'../static/upload')
}