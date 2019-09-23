//引入代表当前进程的模块
const process = require('process');
//console.log(process);
console.log(process.env.OS);//Windows_NT
//根据标志上标志来判断当前是在开发环境还是生产环境以便加载对应的环境
let mode = (process.env.OS == 'Windows_NT'?'dev':'prod');
module.exports = {
    mode:mode,
    ...(mode =='dev'?require('./config.dev'):require('./config.prod'))
    //解构的写法
}